# sshfs

## Install

```sh
brew cask install osxfuse
brew install sshfs
```

## Mount

```sh
sshfs [user@]localhost:/path ~/path
```

## Examples

```sh
sshfs ubuntu@localhost:/home/ubuntu/workspace ~/workspace/mnt -o IdentityFile=~/.ssh/iamlow.pem -o reconnect
```

## References

- https://github.com/libfuse/sshfs
