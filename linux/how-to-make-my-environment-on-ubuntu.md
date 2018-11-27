# How to make my environment on Ubuntu

## User

### Add and grant

```sh
sudo adduser iamlow sudo
```

**OR**

### Add user

```sh
sudo adduser iamlow
```

### Grant sudo privileges to user

```sh
sudo usermod -aG sudo iamlow
```

**Reference**

- [How To Add, Delete, and Grant Sudo Privileges to Users on a Debian VPS](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)
- [Add user](https://twpower.github.io/31-add-user-in-ubuntu)

## ZSH

### Install zsh

```sh
sudo apt-get install zsh
```

### Change my default shell

```sh
chsh -s /usr/bin/zsh
```
