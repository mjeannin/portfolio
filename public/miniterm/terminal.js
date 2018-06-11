var Terminal = (function() {
    var history = [], //(localStorage.getItem("history") ? localStorage.getItem("history").split(",") : []),
        historyIndex = history.length;
        self = {};

    try {
      history = localStorage.getItem("history") ? localStorage.getItem("history").split(",") : []
    } catch(e) {}

    var KEY_UP   = 38,
        KEY_DOWN = 40,
        KEY_TAB  = 9;

    // Auxiliary functions

    var resetPrompt = function(terminal, prompt) {
        var newPrompt = prompt.parentNode.cloneNode(true);
        prompt.setAttribute("contenteditable", false);
        if(self.prompt) {
            newPrompt.querySelector(".prompt").textContent = self.prompt;
        }
        terminal.appendChild(newPrompt);
        newPrompt.querySelector(".input").innerHTML = "";
        newPrompt.querySelector(".input").focus();
    };

    var runCommand = function(terminal, cmd, args) {
        terminal.innerHTML += (self.commands[cmd](args));
    };

    var updateHistory = function(cmd) {
        history.push(cmd);
        try {
          localStorage.setItem("history", history);
        } catch(e) {}
        historyIndex = history.length;
    };

    var browseHistory = function(prompt, direction) {
        var changedPrompt = false;
        if(direction == KEY_UP && historyIndex > 0) {
            prompt.textContent = history[--historyIndex];
            changedPrompt = true;
        } else if(direction == KEY_DOWN) {
            if(historyIndex < history.length) ++historyIndex;
            if(historyIndex < history.length) prompt.textContent = history[historyIndex];
            else prompt.textContent = " ";
            changedPrompt = true;
        }

        if(changedPrompt) {
            var range = document.createRange();
            var sel = window.getSelection();
            range.setStart(prompt.childNodes[0], prompt.textContent.length);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    };

    var autoCompleteInput = function(input) {
        var cmds        = self.commands,
            re          = new RegExp("^" + input, "ig"),
            suggestions = [];
        for(var cmd in cmds) {
            if(cmds.hasOwnProperty(cmd) && cmd.match(re)) {
                suggestions.push(cmd);
            }
        }
        return suggestions;
    };

    // Terminal functions

    self.init = function(elem, commands) {
        self.commands = commands;
        elem.addEventListener("keypress", function(event) {
            var prompt = event.target;
           if(event.keyCode == 13){

              updateHistory(prompt.textContent);

              var input = prompt.textContent.split(" ").filter(item => item);
              if(input[0] && input[0] in self.commands) {
                 console.log(prompt.textContent);
                 runCommand(elem, input[0], input);
              }

              resetPrompt(elem, prompt);
              event.preventDefault();
           }
           else if(event.keyCode == KEY_TAB) {
              var prompt = event.target;
              var suggestions = autoCompleteInput(prompt.textContent.replace(/\s+/g, ""));
              if(suggestions.length == 1) {
                 prompt.textContent = suggestions[0];
                 var range = document.createRange();
                 var sel = window.getSelection();
                 range.setStart(prompt.childNodes[0], suggestions[0].length);
                 range.collapse(true);
                 sel.removeAllRanges();
                 sel.addRange(range);
              }
              event.preventDefault(true);
              return false;
           }
           else {

              if(historyIndex < 0) return;
              browseHistory(event.target, event.keyCode);
           }
        });

        elem.querySelector(".input").focus();
        return self;
    };

    return self;
})();

function moveCursorToEnd(el) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
}
// Component
var termDiv = undefined;
var FakeTerminal = undefined;
(function(currentScript) {

  var elemPrototype = Object.create(HTMLElement.prototype);
  Object.defineProperty(elemPrototype, "commands", {
    get: function() { return this.terminal.commands; },
    set: function(newCommands) { this.terminal.commands = newCommands; }
  });

  elemPrototype.createdCallback = function() {
    this.root = this.createShadowRoot();
    var tplContent = currentScript.ownerDocument.querySelector("template").content,
        node       = document.importNode(tplContent, true);

    this.root.appendChild(node);
  };

  elemPrototype.attachedCallback = function() {
      this.ready = true
      this.terminal        = window.Terminal.init(this.root.getElementById("terminal"), {});
      this.terminal.prompt = this.root.querySelector("content").getDistributedNodes()[0].textContent;
      termDiv = this.root.getElementById("terminal");
      termDiv.addEventListener("click",function(e){
          var input;
          try {
              input = termDiv.lastChild.getElementsByClassName("input")[0];
          } catch(e) {
              input = termDiv.getElementsByClassName("input")[0];
          }
          try {
              input.focus({preventScroll:false});
              moveCursorToEnd(input);
          }
          catch(e) {console.log("ERROR");}
      },false);

      if(this.onload) {
          console.log('onload')
          this.onload()
      }

  };

  elemPrototype.attributeChangedCallback = function(attrName, oldVal, newVal) {
    console.log(attrName, oldVal, newVal);
    if(attrName == "commands") { this.terminal.commands = newVal; }
  };

  FakeTerminal = document.registerElement("fake-terminal", { prototype: elemPrototype });
}(document._currentScript || document.currentScript));
