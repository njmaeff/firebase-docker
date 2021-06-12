# Firebase Local Development With Docker

## Setup

1. Ensure `docker` and `docker-compose` are installed.
1. Run `yarn install` to install project dependencies. `yarn` must be installed.

## Important Files

- `.firebaserc` - Add configuration data related to your firebase project.
- `.firebase.json` - Add configuration data about your emulators. Enable emulators from this config. It's essential to have them listen on host ip `0.0.0.0` when using them in the container.


## Other Notes
- Use a volume to persist data and the downloaded emulators. The emulators are cached at this path: `~/.cache/firebase`.

- Its important to reference the same fake `project-id` when using the emulators if you want to share data between services.


## References

- [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite)
