# VS Code
*for development*

[Website](https://code.visualstudio.com/)

**Why**<br/>
Supports nearly all file types, extensions for everything, cross platform, it's fast and get's better and better.

Install on manjaro:
`sudo pacman -S code`

[More detailed documentation here](vs-code)

**Problems**<br/>
Reopining project sometimes just shows random files and not the one they were open

## Extensions

There should be some basic extensions, that are always installed and some that are just installed per project.

### extension recommendations per project

Projects can make extension recommendations described [here](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)

### extensions within a remote container

VS code has the possibility to create remote containers for projects.
I want to test that in the future, so volta.sh would not be necessary anymore, because the container will take care over the node version.

This remote developer containers also can define extensions that then just activated when the container is connected.

[more information](https://code.visualstudio.com/docs/remote/containers)
