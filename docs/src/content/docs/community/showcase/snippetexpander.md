---
title: Snippet Expander
---

![Snippet Expander Screenshot](../../../../assets/showcase-images/snippetexpandergui-select-snippet.png)

Screenshot of Snippet Expander's Select Snippet window

![Snippet Expander Screenshot](../../../../assets/showcase-images/snippetexpandergui-add-snippet.png)

Screenshot of Snippet Expander's Add Snippet screen

![Snippet Expander Screenshot](../../../../assets/showcase-images/snippetexpandergui-search-and-paste.png)

Screenshot of Snippet Expander's Search & Paste window

[Snippet Expander](https://snippetexpander.org) is "Your little expandable text
snippets helper", for Linux.

Snippet Expander comprises of a GUI application built with Wails for managing
snippets and settings, with a Search & Paste window mode for quickly selecting
and pasting a snippet.

The Wails based GUI, go-lang CLI and vala-lang auto expander daemon all
communicate with a go-lang daemon via D-Bus. The daemon does the majority of the
work, managing the database of snippets and common settings, and providing
services for expanding and pasting snippets etc.

Check out the
[source code](https://git.sr.ht/~ianmjones/snippetexpander/tree/trunk/item/cmd/snippetexpandergui/app.go#L38)
to see how the Wails app sends messages from the UI to the backend that are then
sent to the daemon, and subscribes to a D-Bus event to monitor changes to
snippets via another instance of the app or CLI and show them instantly in the
UI via a Wails event.
