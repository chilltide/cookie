let count = 0; // 食べた枚数
let biteCount = 0; // 1枚を6回でカウント

const cookieImage = document.getElementById('cookie');
const countDisplay = document.getElementById('count');
const cookieSound1 = document.getElementById('cookieSound1');
const cookieSound2 = document.getElementById('cookieSound2');

cookieImage.addEventListener('click', () => {
    biteCount++; // 噛む回数を増やす

    // 画像の事前読み込み
const cookieImages = [];
for (let i = 1; i <= 6; i++) {
    cookieImages[i] = new Image();
    cookieImages[i].src = `cookie_${i}.webp`;
}

    // 最初の噛みの音
    if (biteCount === 1) {
        cookieSound1.play();
    } else {
        cookieSound2.play();
    }

    // 画像の更新
    if (biteCount <= 6) {
        cookieImage.style.backgroundImage = `url('cookie_${biteCount}.webp')`;
    }

    // 6回噛んだら1枚食べたことにする
    if (biteCount === 6) {
        count++; // 食べた枚数を増やす
        countDisplay.textContent = `食べた枚数: ${count}`;
        biteCount = 0; // 次のクッキーにリセット
        cookieImage.style.backgroundImage = 'url("cookie_1.webp")'; // 新しいクッキーを表示
    }
});
