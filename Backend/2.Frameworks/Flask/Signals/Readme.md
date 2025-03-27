Flask Signals - Comprehensive Notes
What are Signals?
Signals are a lightweight way to notify subscribers when specific events occur during the application lifecycle. They allow different parts of an application to communicate efficiently without tightly coupling components. Flask implements signals using the Blinker library.
Why Use Signals?
•	Decouples components, making applications modular.
•	Enables event-driven programming.
•	Useful for logging, auditing, and debugging.
•	Can be subscribed to temporarily, making them ideal for testing.
________________________________________
Core Concepts
1. Creating Signals
To define a custom signal, create a Namespace and register signals within it:
from blinker import Namespace
my_signals = Namespace()
model_saved = my_signals.signal('model-saved')
•	The signal name ('model-saved') helps with debugging.
•	You can retrieve the name of a signal using model_saved.name.
2. Sending Signals
Signals are emitted using the send() method:
class Model:
    def save(self):
        model_saved.send(self)
•	Sender Best Practices:
o	If a signal is emitted from a class, pass self as the sender.
o	If a signal is emitted from a function, use current_app._get_current_object().
3. Subscribing to Signals
To subscribe to a signal, use the connect() method:
def on_model_saved(sender):
    print(f'Model saved by {sender}')
model_saved.connect(on_model_saved)
To unsubscribe, use disconnect():
model_saved.disconnect(on_model_saved)
4. Flask’s Built-in Signals
Flask provides several built-in signals:
•	request_started – Triggered when a request starts.
•	request_finished – Triggered when a request is completed.
•	request_tearing_down – Called when a request is being torn down.
•	template_rendered – Triggered when a template is rendered.
•	got_request_exception – Triggered when an exception occurs.
________________________________________
Advanced Usage
5. Context Managers for Capturing Signals
A context manager can be used to track template rendering during tests:
from flask import template_rendered
from contextlib import contextmanager

@contextmanager
def captured_templates(app):
    recorded = []
    def record(sender, template, context, **extra):
        recorded.append((template, context))
    template_rendered.connect(record, app)
    try:
        yield recorded
    finally:
        template_rendered.disconnect(record, app)
Example Usage in a Test:
with captured_templates(app) as templates:
    rv = app.test_client().get('/')
    assert rv.status_code == 200
    assert len(templates) == 1
    template, context = templates[0]
    assert template.name == 'index.html'
    assert len(context['items']) == 10
6. connected_to() for Temporary Subscription
Flask provides a helper method connected_to() that allows temporarily subscribing a function to a signal within a context manager.
from flask import template_rendered

def captured_templates(app, recorded, **extra):
    def record(sender, template, context):
        recorded.append((template, context))
    return template_rendered.connected_to(record, app)
Example Usage:
templates = []
with captured_templates(app, templates, **extra):
    ...
    template, context = templates[0]
7. Using connect_via() Decorator
You can use the connect_via() decorator to subscribe functions to signals:
from flask import template_rendered

@template_rendered.connect_via(app)
def when_template_rendered(sender, template, context, **extra):
    print(f'Template {template.name} is rendered with {context}')
________________________________________
Key Takeaways
✅ Signals provide an efficient way to handle events without tight coupling. ✅ Use connect() to subscribe and disconnect() to unsubscribe. ✅ Prefer current_app._get_current_object() as a sender instead of current_app. ✅ Utilize captured_templates() and connected_to() for effective testing. ✅ Use connect_via() for convenient signal subscriptions.
________________________________________
This concludes the structured notes on Flask Signals! 🚀

