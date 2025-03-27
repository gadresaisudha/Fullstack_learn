Install python

Create an environment
Create a project folder and a .venv folder within:

macOS/LinuxWindows
> mkdir myproject
> cd myproject
> py -3 -m venv .venv

Activate the environment
Before you work on your project, activate the corresponding environment:

macOS/LinuxWindows
> .venv\Scripts\activate

Install Flask
Within the activated environment, use the following command to install Flask:
$ pip install Flask


Dependencies that get installed with Flask:
Werkzeug implements WSGI, the standard Python interface between applications and servers.
Jinja is a template language that renders the pages your application serves.
MarkupSafe comes with Jinja. It escapes untrusted input when rendering templates to avoid injection attacks.
ItsDangerous securely signs data to ensure its integrity. This is used to protect Flask’s session cookie.
Click is a framework for writing command line applications. It provides the flask command and allows adding custom management commands.
Blinker provides support for Signals.
