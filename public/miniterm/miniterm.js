var select = function(tree, path) {
  console.log(tree);
  console.log(path);
  var ret = tree;
  path.forEach(function(entry) {
    ret = ret[entry];
  });
  return ret;
};

var lslist = function(node) {
  if (typeof node === "object") {
    return Object.keys(node).join("<br>");
  }
  return "";
};

var cd = function(tree, path, dir, err) {
  if (dir == "..") {
    path = path.splice(-1, 1);
  }
  else if (dir in select(tree, path)) {
    path.push(dir);
  }
  else {
    err = "No such directory: " + dir;
    return true;
  }
  return false;
}

class Shell {
  constructor () {
    this.pwd = ["~"];
    this.filetree = {"~":{}};
  }
  get_pwd () {
    console.log(this.pwd);
    console.log(this.filetree);
    return this.pwd;
  }
  create_dir (dirname) {
    if (dirname in select(this.filetree, this.pwd)) {
      return false;
    }
    select(this.filetree, this.pwd)[dirname] = {};
    return true;
  }
}
var shell = new Shell();

var commands = {};

commands.help = function(){
  return 'test';
}

var mans = {
  'mkdir' : 'mkdir -- make directories',
  'ls' : 'ls -- list directory contents',
  'cd' : 'cd -- change the shell working directory',
  'echo' : 'echo -- write arguments to the standard output',
  'pwd' : 'pwd -- return working directory name',
  'man' : 'man - format and display the on-line manual pages'
}

commands.man = function(args){
  return mans[args[1]] ? mans[args[1]] : 'No man for command ' + args[1];
}

commands.mkdir = function(args){
  if (args.length < 2){
    return 'You need to specify a name for your directory';
  }
  if (shell.create_dir(args[1])){
    return '';
  }
  else {
    return 'Could not create directory "' + args[1] + '": a directory with this name already exists.';
  }
}

commands.ls = function(args){
  if (args.length > 2){
    return 'Erreur';
  }
  else if (args.length == 2) {
    if (args[1] in select(shell.filetree, shell.pwd)) {
      return lslist(select(shell.filetree, (Object.assign(shell.pwd)).concat(args[1])));
    }
    else
      return "No such directory: " + args[1];
  }
  else {
    return lslist(select(shell.filetree, shell.pwd));
  }
}

commands.cd = function(args){
  if (args.length != 2){
    return 'Erreur';
  } else{
    var err;
    if (cd(shell.filetree, shell.pwd, args[1], err)) {
      return err;
    }
    else {
      return '';
    }
  }
}

commands.echo = function(args){
  var str = args.slice(1).join(' ');
  return str;
}

commands.pwd = function(){
  return shell.get_pwd().join('/') + '/';
}

var terminal = document.getElementById('miniterm');
if (terminal.ready) {terminal.commands = commands;}
else {
  terminal.onload = function(){
    this.commands = commands;
  }
}
