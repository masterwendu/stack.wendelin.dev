# Linux

As my operating system I use [**Manjaro** i3 edition](https://manjaro.org/download/community/i3/).
Manjaro is the OS of my choice because it's easy to install, has up to date packages and can use the [AUR](https://aur.archlinux.org/)

i3 is the desktop manager of my choice, because it helps a lot to stay focused and of course because it's hackerstyle :grinning:

[[toc]]

## i3 config
*TODO*

## i3 hotkeys
*TODO*

## Applications
### yay - AUR package manager

[Website](https://github.com/Jguer/yay)

Install on manjaro:
`sudo pacman -S yay`

**Why**<br/>
Because it is easy to use and uses pacman syntax.

### volta.sh

[Website](https://volta.sh/)

*requirements*

- [yay](#yay-aur-package-manager)

Install on manjaro:
`yay -S volta`

**Problems**<br/>
Some AUR packages cannot be installed, because volta doesn't allow to use global install of `yarn` or `npm` but some installation scripts use this methods. For now I have no solution for that problem

### fm4 player (web version)

[Website](https://fm4.orf.at/player)

*requirements*

- [volta](#volta-sh)

Install on manjaro:
- `volta install nativefier`
- `nativefier --show-menu-bar --tray --name "FM4" --single-instance "https://fm4.orf.at/player"` ( `--tray` is option, but I like to see that it's running)
- create in `~/.local/share/applications` a file called `fm4_player.desktop` with following content
```
[Desktop Entry]
Type=Application
Terminal=false
Name=FM4 Player
Icon=/home/wendelin/Pictures/application_icons/fm4Player.png
Exec=/home/wendelin/FM4-linux-x64/FM4
```
- download the fm4 logo and save it to the Icon path (or change the icon path)
- check if the exec path is correct
- reboot to have it in your launcher
