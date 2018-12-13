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

**References:**

- [How To Add, Delete, and Grant Sudo Privileges to Users on a Debian VPS](https://www.digitalocean.com/community/tutorials/how-to-add-delete-and-grant-sudo-privileges-to-users-on-a-debian-vps)
- [Add user](https://twpower.github.io/31-add-user-in-ubuntu)

## ZSH

### Install zsh

```sh
sudo apt-get install git-core zsh #zsh-syntax-highlighting
```

### Change my default shell

```sh
chsh -s /usr/bin/zsh
```

### Install oh-my-zsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

**OR**

```sh
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

#### Theme

https://github.com/sindresorhus/pure

### Install plugins

```sh
# zsh-completions
git clone https://github.com/zsh-users/zsh-completions ~/.oh-my-zsh/custom/plugins/zsh-completions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# zsh-autosuggestions
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# add to ~/.zshrc
plugins=(
    git
    zsh-completions
    zsh-syntax-highlighting
    zsh-autosuggestions
)
```

### Install fonts

Powerline fonts: https://github.com/powerline/fonts

## Gnome Terminal Themes

```sh
sudo apt-get install dconf-cli
wget -O gogh https://git.io/vQgMr && chmod +x gogh && ./gogh && rm gogh
```

**References:**

- https://mayccoll.github.io/Gogh/#0

