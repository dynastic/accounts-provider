# `@dynastic-accounts/provider`

A Passport OAuth2 strategy for easily authenticating users with Dynastic Accounts.

## Installation

* `npm install --save @dynastic-accounts/provider`
* It's that simple!

## Example usage

### Authorization

```js
passport.use(new DynasticStrategy({
        clientID: "123-456-789",
        clientSecret: "shhh-its-a-secret",
        scopes: ["user"],
        callbackURL: "https://www.example.net/auth/dynastic/callback",
        firstParty: true // Skip consent
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate(..., (err, user) => {
            cb(err, user);
        });
    }
));

router.get('/dynastic', passport.authenticate("dynastic", { state: "auth" }));
router.get("/dynastic/callback", passport.authenticate("dynastic", { failureRedirect: "/auth-fail" }));
 ```

 #### Advanced Options

 * Set `options.apiBaseURL` and  `options.frontendBaseURL` to control which servers the requests are made against.
 * To completely change the URL, set `options.authorizationURL` and `options.tokenURL` when creating the strategy.
