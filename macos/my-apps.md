# My Apps for Mac

-   atom
-   vscode
-   sublime text
-   etcher
-   spectacle
-   chrome
-   msoffice for mac
-   iterm2
-   zsh
    ```sh
    brew install zsh zsh-completions
    chsh -s /usr/bin/zsh
    ```
  - oh-my-zsh
    ```
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
    ```
    - theme
      ```sh
      git clone https://github.com/bhilburn/powerlevel9k.git ~/.oh-my-zsh/custom/themes/powerlevel9k 
      # add to ~/.zshrc
      ZSH_THEME="powerlevel9k/powerlevel9k"
      ```
    - font
      ```sh
      brew tap homebrew/cask-fonts
      brew cask install font-awesome-terminal-fonts 
      ```
    - plugin
      ```sh
      # zsh-syntax-highlighting
      git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

      # zsh-autosuggestions
      git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
      # add to ~/.zshrc
      plugins=(
        git
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
-   typora
-   kite
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
