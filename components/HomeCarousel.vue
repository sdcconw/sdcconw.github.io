<template>
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/datacenter-1-e1618558321232.jpg" class="d-block w-100" alt="Data center image 1" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>ピアリングポリシーはオープンです。</h5>
                    <p>当団体は、ネットワークについて実践的な研究を行っております。企業・団体・個人様いずれもピアリング頂けますので、お気軽にご連絡ください。</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/swfront-e1618558086234.jpg" class="d-block w-100" alt="Data center image 2" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>SDCCONWの接続ユーザーを募集しております。</h5>
                    <p>
                        本団体の運営するインターネットに対する接続性提供サービスは島根県内にご在住の方に限らず、受け付けております。<br />
                        ご興味のある方はお気軽にお問い合わせください。
                    </p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped>
img {
    filter: brightness(40%);
    max-height: 50vh;
}
</style>