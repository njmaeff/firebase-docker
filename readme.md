# Firebase Local Development With Docker

## Setup
This example uses `docker` to run the emulators and `yarn` as a package manager.

1. Install `docker` and `docker-compose`.
1. Run `yarn install` to install project dependencies. `yarn` must be installed.

This project uses typescript. You may build the source code by running this command in the root directory.
```bash
yarn build
```

## Testing

```bash
# run this command in the root directory
yarn test
```

## Important Files

- `.firebaserc` - Add configuration data related to your firebase project.
- `.firebase.json` - Add configuration data about your emulators. Enable emulators from this config. They must listen on host IP `0.0.0.0` when using them in the container.


## Other Notes
- Use a volume to persist data and the downloaded emulators. The emulators are cached at this path: `~/.cache/firebase`.

- You must reference the same fake `my-project-id` when using the emulators to share data between services.


## References

- [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite)
