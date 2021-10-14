const $bookAbridgeDesc = $('.abridged-conditional');
const $fullDesc = $('.full-desc');
const $moreBtn = $('.expand-desc');
const $lessBtn = $('.less-desc');

$moreBtn.click(() => {
  $bookAbridgeDesc.addClass('hidden');
  $fullDesc.removeClass('hidden');
});

$lessBtn.click(() => {
  $bookAbridgeDesc.removeClass('hidden');
  $fullDesc.addClass('hidden');
});
