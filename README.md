<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>yuta's profile</title>
    <meta name="description" content="菅沼雄太のプロフィール兼ポートフォリオ">
    <link rel="stylesheet" href="portfolio.css">
    <script src="jquery-3.4.1.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet">

</head>
<body>
    
    <header class="header">
        <div class="header-left">
            <p>-Web designer-</p>
            <h1>SuganumaYuta</h1>
        </div>
        <ul class="header-right">
            <li class="header-right-item"><a  href="#top">Top<br>トップ</a></li>
            <li class="header-right-item"><a  href="#profile">Profile<br>プロフィール</a></li>
            <li class="header-right-item"><a  href="#works">Portfolio<br>ポートフォリオ</a></li>
            <li class="header-right-item"><a  href="#contact">Contact<br>コンタクト</a></li>
        </ul>
    </header>

    <section id="top">
        <div class="top">
            <p>-Web designer-</p>
            <h1>Suganuma Yuta</h1>
        </div>
    </section>

    <section id="profile">
        <div class="profile-box">
            <div class="profile">
                <h3>Profile</h3>
                <p>はじめまして。こちらのページをご覧いただきありがとうございます。<br><br>
                    今現在、大学生の菅沼雄太と申します。<br>
                    愛知県出身で愛知県の大学に通っています。<br>
                    高校までは毎日サッカーの生活を送り、今は学業に励みながら趣味の音楽を聞くことと、旅行を楽しむ生活をしています。<br><br>
                    Web制作歴はまだ浅いですが、精一杯より良いものを作りあげれたらいいなと考え、日々精進しています。<br><br>
                    SNS,メールアドレスを掲載しておくので、お仕事の相談でもお気軽にご連絡いただければと思います。
                </p>
            </div>
            <img  src="IMG_3610.jpeg" width="530" alt=""> 
        </div>
        <div class="profile-box">
            <div class="profile">
                <h3>Skill</h3>
                <p>HTML&CSS、Javascript、jQueryをメインにWebコーティングを行っていきたいと考えております。<br><br>
                    ポートフォリオとして、このページを作りました。レスポンシブ方式で作っています。まだ依頼を請負った経験はないので、至らない部分があると思いますが、その分報酬は低くさせていただいてます。
                    ご依頼者様のご希望通りの高品質なものを作りあげれるよう尽力を尽くします。<br><br>
                    このページの下には実績を載せようと思っていますが、まだ実績を持っていないので愛犬を載せておきます。</p>
            </div>
            <img src="IMG_8533.jpeg"  width="530" alt="">
        </div>
    </section>

    <section id="works">
        <h3>Works</h3>
        <ul class="works-items">
            <li class="works-item-box">
                <a class="works-item" href="portfolio-work-1.html">
                    <img width="120" src="IMG_1838.jpeg" alt="">
                    <div class="works-item-info">
                        <h4>BB</h4>
                        <p>昨年亡くなってしまった、ぼくの相棒です。たくさんのものをくれました。</p>
                    </div>    
                </a>
            </li>
            <li class="works-item-box">
                <a class="works-item" href="portfolio-work-1.html">
                    <img width="120" src="IMG_8701.jpeg" alt="">
                    <div class="works-item-info">
                        <h4>リアン</h4>
                        <p>今家にいるペットたちのお母さん的存在です</p>
                    </div>    
                </a>
            </li>
            <li class="works-item-box">
                <a class="works-item" href="portfolio-work-1.html">
                    <img width="120" src="IMG_8725.jpeg" alt="">
                    <div class="works-item-info">
                        <h4>JJ</h4>
                        <p>とても頭の良いがきんちょです。</p>
                    </div>    
                </a>
            </li>
            <li class="works-item-box">
                <a class="works-item" href="portfolio-work-1.html">
                    <img width="120" src="IMG_3582.jpeg" alt="">
                    <div class="works-item-info">
                        <h4>ライアン・ネロ</h4>
                        <p>まだ一歳になってないpuppyです。</p>
                    </div>    
                </a>
            </li>  
        </ul>    
    </section>

    <section id="contact">
        <h3>Contact</h3>
        <form action="mailto:bmto0108@yahoo.co.jp" method="post" enctype="text/plain">
            <dl class="contact">
                <dt class="contact-dt">NAME</dt>
                <dd class="contact-dd"><input type="text" name="name"></dd>
                <dt class="contact-dt">E-MAIL</dt>
                <dd class="contact-dd"><input type="email" name="email"></dd>
                <dt class="contact-dt">MESSAGE</dt>
                <dd class="contact-dd"><textarea name="question" id="" cols="30" rows="10"></textarea></dd>
            </dl>
            <input class="btn" type="submit" value="送信">
        </form>
    </section>

    <footer>
        <div class="footer">
           
            <div class="follow-us">
              <a href="https://instagram.com/Yuta_greentea09?r=nametag" class="instagram" target='_blank'>
                <img width="32px" src="glyph-logo_May2016.png" alt="">
              </a>
              <a href="https://twitter.com/Yuta_greentea09" class="twitter" target='_blank'>
                <img width="32px" src="Twitter_Social_Icon_Circle_Color.png" alt="">
              </a>
            </div>
            <small class="copyright">©Suganuma Yuta
            </small>
          </div>
    </footer>   
<script type="text/javascript" src="portfolio.js"></script>
</body>
</html>
