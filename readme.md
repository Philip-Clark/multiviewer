# Mult-i-Viewer

If you just want to use Mult-i-Viewer, go to [https://philip-clark.github.io/multiviewer/](https://philip-clark.github.io/multiviewer/)

## About

Mult-i-viewer, as the name suggests, provides a way to view multiple Iframes at once.
Mult-i-viewer allows multiple "tabs" which are collections of sources. Each tabs sources can be easily edited from the source control modal which is accessed by clicking the settings button. Adding a new source is simple and quick. Simply enter a name and paste the iframe embed code. Mult-i-viewer automatically adjusts the layout of sources to best present all the sources on a tab.

## The Need

The project was born from a need I saw while working with a team who needed to monitor 9 live streamed sessions. Initially I built a simple hard coded site for this but knew this was not scalable. In the next few weeks I built Mult-i-viewer.

## Keyboard Shortcuts

|     Key     | Action                 |
| :---------: | :--------------------- |
| Left Arrow  | Go to the previous tab |
| Right Arrow | Go to the next tab     |
| ` ( Tilde ) | Open the settings      |
|     1-9     | Quick jump to tabs 1-9 |
|             |                        |

## The internal workings

Internally, Mult-i-viewer extracts the scr from the provided embed code and creates a new iframe to hold the source. Preferably one could copy the share url from sources like youtube, however these are not always compatible with iframes. This does mean however that mult-i-viewer does not use the style, surrounding html structure, and other attributes from the original source. If this is something your use case needs, please feel free to submit feedback explaining why and what you would like for mult-i-viewer to use from the original source.

## Notice

The inner workings of autoplaying and unmuting embeds works by appending 'autoplay=1&muted=1&mute=1' to the embeds src url. This has been tested to work with streams from the following sources:

- Youtube.com
- Vimeo.com
- Resi.com

If there is another source you wish to use and you find that mutl-i-viewer doesn't seem to work with it, feel free to submit feedback through the feedback form and leave your contact email so that you can be notified about the status of the update.

## Known Issues

- **Stubborn Stream**: It's been observed on sporadic and non repeatable occasions that a stream will persist and multiply between tabs and/or after deletion

  **The Solution is to refresh the page**. We have found refreshing to always work. If there's a certian stream that continues to do this, try removing the stream and re-adding it. Also please submit feedback indicating that you encountered the Stubborn Stream issue and any details about the surrounding circumstances you can provide.
  <br></br>

- **No Data Sync:** Mult-i-viewer currently uses localStorage on your browser to save sources and tabs. Unfortunately this means if you move to another computer or browser you will not have your localy saved tabs and sources.

  **The Solution is for Mult-i-Viewer to implement accounts** and a hosted database. This is not an impossible or neccesarly difficult feature to add, but in the spirit of less is more, I decided not to include it initially. If this is something you need or want, please let me know through the feedback form and enter you enter you contact email so you can be updated on progress regarding this feature

<br></br>

- **Styles from Embed Code not Working:** As mentioned in the "Internal Workings" section, Mult-i-Viewer does not use the styles, sorrounding html, or any other attributes from the original source. This has to do with how Mult-i-Viewer handles displaying the sources.

  **The Solution is to collect data on what attributes of the original sources users want or need**, and copy them over to the displayed source. Please submit feedback on this topic if it's something you would like to see implemented.

<br></br>
