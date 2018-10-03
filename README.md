# HELLO-HTTP

This implements a server that provides some very basic responses to HTTP GET requests.

## Happy Birthday

This function supports two request formats:

### /happy-birthday/[name]

Responds with a happy birthday greeting to the name.  If name is not supplied, 'Stranger' is used instead.

### /happy-birthday/[name]?custom=[message]

Exactly as above, but the additional message follows the birthday greeting

## HTTP Facts

### /fact

Responds with one randomly-chosen fact from a small collection of facts about http.

## Error Messages

Any request that is not a GET, or any request that doesn't conform to the above formats, results in a 404 error.