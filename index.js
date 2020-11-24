const siteHtml = {
  siteElement: document.getElementById('site'),
  showSiteElement: function () {
    this.siteElement.classList.remove('disappear');
  },
};

const warningHtml = {
  warningElement: document.getElementById('warning-screen'),
  hideWarningElement: function () {
    this.warningElement.classList.add('disappear');
    console.log('halo');
  },
};

function showSite() {
  siteHtml.showSiteElement();
  warningHtml.hideWarningElement();
  //   document.getElementById('warning-screen').classList.add('disappear');
}
