# Linux

As my operating system I use [**Manjaro** i3 edition](https://manjaro.org/download/community/i3/).
Manjaro is the OS of my choice because it's easy to install, has up to date packages and can use the [AUR](https://aur.archlinux.org/)

i3 is the desktop manager of my choice, because it helps a lot to stay focused and of course because it's hackerstyle :grinning:

[[toc]]

## i3 config
Instpect and copy [here](i3)

<a href="/assets/i3/config" download>Download</a>

## Applications
### yay - AUR package manager
*To install packages from the arch user repository*

[Website](https://github.com/Jguer/yay)

Install on manjaro:
`sudo pacman -S yay`

**Why**<br/>
Because it is easy to use and uses pacman syntax.

### volta.sh
*for managing node versions*
[Website](https://volta.sh/)

**Why**<br/>
Easy managing of global node cli tools and pinning node versions to projects.

*requirements*

- [yay](#yay-aur-package-manager)

Install on manjaro:
`yay -S volta`

**Problems**<br/>
Some AUR packages cannot be installed, because volta doesn't allow to use global install of `yarn` or `npm` but some installation scripts use this methods. For now I have no solution for that problem

### fm4 player (web version)
*for listening to FM4 radio*

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

### Albert launcher
*for starting apps within i3*

[Website](https://albertlauncher.github.io/)

**Why**<br/>
Good design and has plugins like calculator that you can use right in the launcher.
It's a bit like Apples mac os spotlight.

Install on manjaro:
`sudo pacman -S albert`

**Problems**<br/>
On default install the calculator wasn't working, I needed to add the plugin within the programms folder manually. Maybe it's fixed in next builds.

### Visual Studio code
*for develoment*

[Website](https://code.visualstudio.com/)

**Why**<br/>
Supports nearly all file types, extensions for everything, cross platform, it's fast and get's better and better.

Install on manjaro:
`sudo pacman -S code`

[More detailed documentation here](vs-code)

**Problems**<br/>
Reopining project sometimes just shows random files and not the one they were open

### Firefox
*for browsing the web*

[Website](https://www.mozilla.org/en-US/firefox/new/)

**Why**<br/>
Firefox is the browser of my choice for private usage. It is open source and stands for a free web.
In the days where all big browser vendors except firefox are using chromium as basis I recommend to support firefox.
On the other hand I am a web developer and know the pain of developing stuff for multiple browsers because they need it differently.

But overall I am a big fan of Firefox. I also use it on Android/iOS and use the sync feature to have my history synced between my devices.

Install on manjaro:
`sudo pacman -S firefox`

### Chromium / Chrome
*for web development*

- [Website Chromium](https://www.chromium.org/)
- [Website Chrome](https://www.google.com/chrome/)

**Why**<br/>
Best browser for web development. I work mostly with chromium because of the web development feature built in.
Firefox has also some nice dev features but I am used to them from chrome more. Maybe I should force myself in the future to more use firefox.

Of course our customers mostly use Google Chrome so it makes sense that I focus on this browser first.

Install on manjaro:
`sudo pacman -S chromium`
`yay -S google-chrome`

### Flameshot
*for screenshots*

- [Website](https://flameshot.js.org/#/)

**Why**<br/>
Best screenshot tool out there. It starts when I press the Print key and then I can select the area, blur parts of it, add drawings and texts. Afterwards just save or copy and use it.

Install on manjaro:
`sudo pacman -S flameshot`

### Peek
*for recording the screen*

- [Website](https://github.com/phw/peek)

**Why**<br/>
Because sometimes I want to create gifs.

Install on manjaro:
`sudo pacman -S peek`


