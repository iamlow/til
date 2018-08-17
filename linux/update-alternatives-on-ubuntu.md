# Update Alternatives 

about the symbolic links

## Search

```sh
update-alternatives --list java
```

## Show all lists

```sh
update-alternatives --all
```

## Install

```sh
update-alternatives --install <link> <name> <path> <priority>
```

### Example

```sh
update-alternatives --install /usr/bin/java java /opt/jdk1.8.0_72/bin/java 1
```

## Config

```sh
update-alternatives --config java
```

## References

https://linux.die.net/man/8/update-alternatives
