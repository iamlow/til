SSHPASS
=======

Sshpass is a tool for non-interactivly performing password authentication with SSH's so called "interactive keyboard password authentication". Most user should use SSH's more secure public key authentiaction instead.

### How to install
##### Mac OS:

```sh
brew tap esolitos/ipa
brew install sshpass
```

OR

**Deprecated**
```sh
brew install https://raw.github.com/eugeneoden/homebrew/eca9de1/Library/Formula/ss
```

OR

**Deprecated**
```sh
brew install https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb
```

##### Ubuntu:
```sh
sudo apt-get install sshpass
```

#### How to use
```sh
sshpass -p [password] ssh-copy-id [id]@[url] -p [port number]
```

#### References

- https://sourceforge.net/projects/sshpass
- https://gist.github.com/arunoda/7790979
