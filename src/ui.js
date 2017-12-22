export default class UI {
  constructor(composer) {
    this.composer = composer;
    this.isMuted = false;

    this.hideHelp = this.hideHelp.bind(this);

    this.toggleSoundNode = document.getElementById('toggle-sound');
    this.toggleSoundNode.onclick = this.toggleSound.bind(this);

    this.helpNode = document.getElementById('help');
    this.helpTimer = null;
    this.toggleHelp();

    this.toggleHelpNode = document.getElementById('toggle-help');
    this.toggleHelpNode.onclick = this.toggleHelp.bind(this);

    this.levelNumberNode = document.getElementById('level-number');
  }

  toggleSound() {
    if (this.isMuted) {
      this.composer.unmute();
      this.toggleSoundNode.innerHTML = '<i class="fa fa-volume-up"></i> mute';
    } else {
      this.composer.mute();
      this.toggleSoundNode.innerHTML =
        '<i class="fa fa-fw fa-volume-off"></i> unmute';
    }

    this.isMuted = !this.isMuted;
  }

  toggleHelp() {
    if (this.helpTimer === null) {
      this.helpNode.style.transition = '.5s opacity ease-in-out';
      this.helpNode.style.opacity = 1;
      this.helpTimer = setTimeout(this.hideHelp, 5000);
    } else {
      clearTimeout(this.helpTimer);
      this.hideHelp();
    }
  }

  hideHelp() {
    this.helpNode.style.transition = '2s opacity ease-in-out';
    this.helpNode.style.opacity = 0;
    this.helpTimer = null;
  }

  setLevel(number) {
    this.levelNumberNode.innerHTML = number;
  }
}
