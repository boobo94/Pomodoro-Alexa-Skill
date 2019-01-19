# Pomodoro-Alexa-Skill
This is a pomodor timer skill for Amazon Alexa


# Deployment

**ASK CLI** will create the skill and the Lambda function for you.
```bash
$ ask deploy
```

# Local development

In order to develop locally and see your changes reflected instantly, you will need to create an SSH tunnel or expose somehow your local development server. There are several services that allow you to do this, for example [ngrok](https://ngrok.com/) or [serveo.net](https://serveo.net/).

## Using servo.net


1. You need to have an SSH client installed, then simply run

```bash
$ ssh -R 80:localhost:3000 serveo.net
Forwarding HTTP traffic from [https://YOUR_URL]
Press g to start a GUI session and ctrl-c to quit.
```

2. Once you see the URL, copy it and go to your Skill console.

3. Open the `Endpoint` menu and select `HTTPS`

4. Under `Default Region` paste the previous URL you copied.

5. On the select box choose: `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`.

6. Run `npm start` to start the local server and begin testing the skill.

That's it.

## Using [ngrok](https://ngrok.com/download)

1. Install [ngrok](https://ngrok.com/download)

2. Run `ngrok http 3000`

3. Copy the URL and follow the same steps above from 3 to 6.
