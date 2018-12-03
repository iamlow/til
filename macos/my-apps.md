# My Apps for Mac

-   atom
-   vscode
-   sublime text
-   etcher
-   spectacle
-   chrome
-   msoffice for mac

## iterm2

```sh
brew cask install iterm2
```

## zsh

### how to install

```sh
brew install zsh
chsh -s /usr/bin/zsh
```

### How to install oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### How to setup my theme

#### Pure

https://github.com/sindresorhus/pure

#### agnoster

```sh
# add to ~/.zshrc
ZSH_THEME="agnoster"
```

#### powerlevel9k

```sh
git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k 
# add to ~/.zshrc
ZSH_THEME="powerlevel9k/powerlevel9k"
```

### How to install fonts

#### font-awesome-terminal-fonts 

```sh
brew tap homebrew/cask-fonts
brew cask install font-awesome-terminal-fonts 
```

#### powerline fonts

- https://github.com/powerline/fonts


### How to install plugins

```sh
brew install zsh-completions zsh-syntax-highlighting zsh-autosuggestions

vi ~/.zshrc

fpath=(/usr/local/share/zsh-completions $fpath)
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

OR

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

-   docker
-   pocket
-   dropbox
-   pycharm ce
-   firefox
-   grammarly
-   hwp 2014 vp viewer
-   typora (x)
-   kite (x)
-   onedrive
-   naver cloud
-   box sync
-   trello
-   android studandroid file transfer
-   vlc player
-   deskapp for youtube
-   sourcetree
-   pencil
-   google drive file stream
-   kakaotalk
-   db browser for sqlite
-   backup and sync from google
-   pgadmin4
-   logitech options
-   intellij idea ce
-   qbittorrent
-   web server for chrome
-   [homebrew](https://brew.sh/index_ko)
-   tig
    ```sh
    brew install tig
    ```
    
    - https://jonas.github.io/tig/doc/manual.html
    - https://ujuc.github.io/2016/02/10/tig-manual/
    
-   cookiecutter
  
## New

- [hyper](https://hyper.is)
  ```sh
  brew cask install hyper
  ```
  - zsh
    ```sh
    # add to hyper.js
    shell: '/usr/local/bin/zsh',
    ```
  - oh-my-zsh
    ```sh
    fontFamily: '"Droid Sans Mono Awesome", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',
    ```
- [tmux](https://github.com/tmux/tmux/wiki)
  ```sh
  brew install tmux
  ```
- [neovim](https://neovim.io)
   ```sh
   brew install neovim
   brew tap caskroom/fonts
   brew cask install font-hack-nerd-font
   ```
   
   ```sh
   # add to ~/.zshrc
   alias vim="nvim"
   alias vi="nvim"
   alias vimdiff="nvim -d"
   export EDITOR=/usr/local/bin/nvim
   ```

**References:**

https://sourabhbajaj.com/mac-setup/iTerm/
