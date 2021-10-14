// Text Content
const $bookAbridgeDesc = $('.abridged-conditional');
const $fullDesc = $('.full-desc');
const $bookTitle = $('.get-book-title').text();

// Links
const $buyRedirect = $('.buy-confirm-link');

// Buttons
const $moreBtn = $('.expand-desc');
const $lessBtn = $('.less-desc');
const $buyBtn = $('.buy-btn');

// Global Variables

// Functions
const urlNameMatch = (str) => {
  return str.toLowerCase().split(' ').join('%20');
};

// Event Listeners
$moreBtn.click(() => {
  $bookAbridgeDesc.addClass('hidden');
  $fullDesc.removeClass('hidden');
});

$lessBtn.click(() => {
  $bookAbridgeDesc.removeClass('hidden');
  $fullDesc.addClass('hidden');
});

$buyBtn.click(() => {
  $buyRedirect.attr('href', `https://www.esowonbookstore.com/search/site/${urlNameMatch($bookTitle)}`);
});
