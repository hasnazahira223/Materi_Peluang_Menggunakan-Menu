const menu = document.getElementById('menu-button');
const sidebar = document.getElementsByClassName('sidebar')[0];

menu.addEventListener('click, function') {
    sidebar.classList.toggle('hide');
    console.log('ok');
}

<script src="script.js"></script>
        <h1><strong><center>Kaidah Pencacahan</center></strong></h1>
        </head>
        <body>
            <h2>Sub 1 Aturan Penjumlahan</h2>
            <p>Pada aturan penjumlahan bila suatu himpunan S terbagi ke dalam himpunan-himpunan bagian yaitu S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>, ..., S<sub>n</sub>, maka jumlah unsur yang berada di dalam himpunan S sama dengan jumlah semua unsur yang ada dalam setiap himpunan bagian dari S atau dapat dirumuskan sebagai berikut. 
                S = S<sub>1</sub> + S<sub>2</sub> + S<sub>3</sub> + ... + S<sub>n</sub> Namun demikian prinsip di atas tidak berlaku jika ada diantara himpunan-himpunan bagian tersebut yang anggotanya saling tindih. </p>
                <p>Contoh</p>
                <p>Bila kita bermaksud membeli handphone. Di toko, kita menemukan ada handphone merek A dengan 4 macam model, merek B dengan 3 macam model, dan merek C ada 5 macam model. Jadi kita akan membeli handphone di toko itu, maka kita memiliki 5 + 4 + 3 = 12 macam model handphone. Jadi banyak model handphone di toko itu ada 5 model A + 4 model B + 3 model C = 12 model.</p>
            <h3>Sub 2 Aturan Perkalian</h3>
            <p>Jika suatu kejadian dapat terjadi dengan n1 cara, kejadian kedua dapat terjadi dengan n2  cara, kejadian ketiga dapat terjadi dengan n3  cara, dan seterusnya maka kejadian-kejadian dengan urutan yang demikian dapat terjadi dengan (n<sub>1</sub> * n<sub>2</sub> * n<sub>3</sub> * ...) cara. Aturan perkalian ditandai dengan kata “dan”. (Yuliatmoko & Retno, 2008)</p>
            <p>Contoh Soal</p>
            <p>Berapa cara yang dapat diperoleh untuk memilih posisi seorang tekong, apit kiri, dan apit kanan dari 15 atlet sepak takraw pelatnas SEA GAMES jika tidak ada posisi yang rangkap? (Tekong adalah pemain sepak takraw yang melakukan sepak permulaan).</p>
            <p>Jawab</p>
            <ul>
                <li>Untuk posisi tekong. Posisi tekong dapat dipilih dengan 15 cara dari 15 atlet pelatnas yang tersedia. </li>
                <li>Untuk posisi apit kiri. Dapat dipilih dengan 14 cara dari 14 atlet yang ada (1 atlet lagi tidak terpilih karena menjadi tekong).</li>
                <li>Untuk posisi apit kanan. Cara untuk memilih apit kanan hanya dengan 13 cara dari 13 atlet yang ada ( 2 atlet tidak dapat dipilih karena telah menjadi tekong dan apit kiri).</li>
            </ul> 
            <p>Dengan demikian, banyak cara yang dilakukan untuk memilih posisi dalam regu sepak takraw adalah 15 * 14 * 13 = 2.730 cara.</p>
            <h2>Sub 3 Faktorial</h2>
            <p>Faktorial adalah hasil kali bilangan asli berurutan dari 1 sampai dengan n. (Wahyudin Djumanta; R. Sudrajat, 2008)</p>
            <p>Definisi:</p>
            <p>n! = 1 * 2 * 3 * ... * (n-2) * (n-1) * n atau n! = n * (n-1) * (n-2) * ... * 3 * 2 * 1 </p>
            <p>Untuk setiap bilangan asli n, didefinisikan n! = 1 * 2 * 3 * ... * (n-2) * (n-1) * n lambang atau notasi n! dibaca sebagai n faktorial untuk n > 2.</p>
            <p>Contoh Soal:</p>
            <p>Hitunglah</p>
            <ol>
                <li>5!</li>
                <li><sup>13!</sup>/<sub>(0!10!)</sub></li>
                <li><sup>12!</sup>/<sub>(12!)(2!8!)</sub></li>
                <li><sup>8!</sup>/<sub>(8!)(5!)</sub></li>
        </ol>
        <p>Jawab</p>
        <ol>
            <li>5! = 5 * 4 * 3 * 2 * 1 = 120</li>
            <li><sup>13!</sup>/<sub>(0!10!)</sub> = <sup>(13 * 12 * 11 * 10)</sup>/<sub>(0!10!)</sub> = 1.716</li>
            <li><sup>12!</sup>/<sub>(2!8!)</sub> = <sup>(12 * 11 * 10 * 9 * 8!)</sup>/<sub>(2!8!)</sub> = 5.940</li>
            <li><sup>8!</sup>/<sub>5!</sub> = <sup>(8 * 7 * 6 * 5!)</sup>/<sub>5!</sub> = 8 * 7 * 6 = 336</li>
        </ol>
        <h2>Sub 4 Permutasi</h2>
        <p>Permutasi adalah urutan yang mungkin dari sejumlah unsur yang berbeda tanpa adanya pengulangan. Banyak permutasi n unsur apabila disusun dalam k unsur adalah</p>
        <p>P(n, k) = <sup>n!</sup>/<sub>(n-k)!</sub> dengan k ≤ n</p>
        <p>Contoh Soal:</p>
        <p>Tiga orang wiraniaga dicalonkan untuk mengisi kekosongan jabatan kepala cabang di dua kota. Tentukan banyak cara untuk memilih dua kepala cabang dari tiga orang wiraniaga tersebut, dengan menggunakan rumus permutasi. </p>
        <p>Jawab</p>
        <p>P(3, 2), dengan n = 3 (banyak wiraniaga) dan k = 2 (banyak wiraniaga terpilih). </p>
        <p>P(n, k) = <sup>n!</sup>/<sub>(n-k)!</sub></p>
        <p>P(3, 2) = <sup>3!</sup>/<sub>(3-2)!</sub> = <sup>(3 * 2 * 1)</sup>/<sub>(1!)</sub> = 6</p>
        <p>Jadi, terdapat 6 Cara</p>
        <b>Jenis-jenis Permutasi</b><br/>
        <p>Permutasi bisa dikelompokkan menjadi beberapa macam, yaitu:</p>
        <table border="1">
            <tr>
            <td><b>N0</b><br/></td>
            <td><b>JENIS PERMUTASI</b><br/></td>
            <td><b>RUMUS</b><br/></td>
            </tr>
            <tr>
            <td>1</td>
            <td>Permutasi dari n elemen, tiap permutasi terdiri dari n elemen</td>
            <td>P<sub>(n, n)</sub> = n! Atau <sub>n</sub>P<sub>n</sub> = n!</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Permutasi n elemen, tiap permutasi terdiri dari r unsur dari n elemen r ≤ n.</td>
            <td>P<sub>(n - r)</sub> = <sub>n</sub>P<sub>r</sub> = P<sub>r</sub><sup>n</sup> = <sup>n!</sup>/<sub>(n-r)!</sub></td>
            </tr>
            <tr>
            <td>3</td>
            <td>Permutasi dari n unsur yang mengandung p. q serta unsur yang sama</td>
            <td>P<sub>(n, k<sub>1</sub>, k<sub>2</sub>, k<sub>t</sub>)</sub> = <sup>n!</sup>/<sub>(k<sub>1</sub>!k<sub>2</sub>! ... k<sub>t</sub>!)</sub></td>
            </tr>
            <tr>
            <td>4</td>
            <td>Permutasi Siklis</td>
            <td><sub>n</sub>P<sub>siklis</sub>  = (n - 1)!</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Permutasi berulang dari n unsur, tipe permutasi terdiri dari k unsur.</td>
            <td>P<sub>n</sub> = n<sup>k</sup></td>
            </tr>
            </table>
        <h2>Sub 5 Kombinasi</h2>
        <p>Kombinasi adalah suatu kumpulan unsur tanpa memperhatikan urutannya. Dari suatu himpunan dengan n anggota dapat dibentuk himpunan bagian dengan k unsur (untuk k ≤ n). Setiap himpunan bagian yang terbentuk merupakan kombinasi k unsur dari n unsur. Banyak kombinasi k unsur dari n unsur sering dinotasikan dengan lambang <sub>n</sub>C<sub>k</sub> , C(n, k), C<sub>k</sub><sup>n</sup>, atau (n k ).</p>
        <p>Untuk menghitung banyak kombinasi k unsur dari n unsur yang tersedia dapat digunakan rumus:</p>
        <p align="center">C(n,k) = <sup>n!</sup>/<sub>k!(n-k)!</sub></p>
        <p>Contoh Soal</p>
        <p>Dari 20 siswa akan dipilih sebuah tim sepak bola yang terdiri atas 11 orang. Tentukan banyak cara dalam pemilihan tersebut.</p>
        <p>Jawab</p>
        <p>Pemilihan tim sepakbola tersebut adalah masalah kombinasi karena tidak memperhatikan urutan. Banyak cara memilih 11 orang siswa dari 20 siswa, yaitu C<sub>20</sub><sup>11</sup>.</p>
        <p>C<sup>20</sup><sub>11</sub> = <sup>20!</sup>/<sub>11!(20-11)!</sub> = <sup>20!</sup>/<sub>(11!9!)</sub></p>
        <p>= <sup>(20 * 19 * 18 * 17 * 16 * 15 * 14 * 13 * 12 * 11!)</sup>/<sub>(11!(9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1!)</sub></p>
        <p>=167.960</p>
        <p>Jadi, banyaknya cara dalam pemilihan sebuah tim sepak bola yaitu 167.960</p>
        <h2>Sub 6 Binomial Newton</h2>
        <p>Binomial Newton merupakan suatu  teorema  yang menerangkan mengenai pengembangan eksponen dari penjumlahan antara dua variabel (binomial). Dalam Binomial Newton memakai koefisien-koefisien (a + b)n. Sebagai contoh, n = 2 diperoleh dari: (a + b)<sup>2</sup> = (1) a<sup>2</sup> + 2ab + (1)b<sup>2</sup>
            Koefisien-koefisien hasil penjabaran (a + b)<sup>2</sup> merupakan 1, 2, 1 yang senilai dengan C<sub>(2,0)</sub> serta C<sub>(2,2)</sub> bisa kita tuliskan menjadi:</p>
        <p align="center">(a + b)<sup>2</sup> = C<sub>(2,0)</sub> a<sup>2</sup> + C<sub>(2,1)</sub> + ab + C<sub>(2,2)</sub> b<sup>2</sup></p>
        <p>Rumus atau Formula Binomial Newton</p>
        <p>(a + b)<sup>2</sup> = C<sub>(n,0)</sub> a<sup>2</sup> + C<sub>(n,1)</sub> a<sup>n-1</sup> + C<sub>(n,2)</sub> a<sup>n-2</sup> + …. + C<sub>(n,r)</sub> a<sup>n-r</sup> b<sup>r</sup>+ C<sub>(n,n)</sub> b<sup>n</sup></p>
        <p>Contoh Soal:</p>
        <p>Suku ke-7 dari (2x + y)<sup>15</sup> yaitu…</p>
        <p>Diketahui: </p>
        <p>n = 15</p>
        <p>r = 7 - 1 = 6</p>
        <p>Sehingga:</p>
        <p>C<sub>(n-r)</sub> (2X)<sup>n-r</sup>*y<sup>f</sup></p>
        <p>C<sub>(15, 6)</sub> (2X)<sup>9</sup>*y<sup>6</sup> = <sup>15!</sup>/<sub>((15-6)!6!)</sub> (2X)<sup>9</sup> * y<sup>6</sup></p>
        <p>= <sup>(15 * 14 * 13 * 12 * 11 * 10 * 9!)</sup>/<sub>(9! * 6 * 5 * 4 * 3 * 2 * 1)</sub> (512 X<sup>9</sup>*y<sup>6</sup>)</p>
        <p>= 1. 155 (512 X<sup>9</sup>*y<sup>6</sup>)</p>
        <p>= 591. 360 X<sup>9</sup>*y<sup>6</sup></p>
        <h2><b>Applet Geogebra</b><br/>
            <center>
                <img src="https://i.postimg.cc/T3nxNJfC/Binomial-Peluang-export.png" width ="300px" height="150px">
            </center>
            <p>Langkah pengembangan terkait Binomial Newton bisa di lakukan di aplikasi geogebra dengan langkah-langkah sebagai berikut</p>
                <p>1. Download aplikasi geogebra, saya sarankan menggunakan geogebra classic</p>
                <p>2. Lalu klik garis tiga yang ada di bagian atas kanan ujung</p>
                <p>3. Setelah itu pilih perspectives, lalu klik probability</p>
                <p>4. Menentukan distribusi di geogebra dibagian bawah kiri</p>
                <p>5. Masukan nilai n dan p yang sudah ditentukan oleh soal</p>
                <p>6. Memilih bagian yang akan digunakan</p>
                <p>7. Hasilnya akan muncul otomatis</p>
                <p>8. Disebelah kanan terdapat tabel untuk beberapa hasil</p>
                <p>9. Bar chart akan berubah mengikuti angka yang digunakan</p>
        <h2>Ringkasan</h2>
        <ul>
        <li>Aturan Perkalian</li>
        <p>Pada aturan penjumlahan bila suatu himpunan S terbagi ke dalam himpunan-himpunan bagian yaitu S<sub>1</sub>, S<sub>2</sub>, S<sub>3</sub>, ..., S<sub>n</sub>, maka jumlah unsur yang berada di dalam himpunan S sama dengan jumlah semua unsur yang ada dalam setiap himpunan bagian dari S atau dapat dirumuskan sebagai berikut. 
            S = S<sub>1</sub> + S<sub>2</sub> + S<sub>3</sub> + ... + S<sub>n</sub></p> 
        <li>Aturan Pengisian Tempat</li> 
        <p>Jika sesuatu pekerjaan diselesaikan dengan p cara yang berlainan dan sesuatu pekerjaan lain diselesaikan dengan q cara yang berlainan, maka banyaknya cara untuk melakukan dua kegiatan itu dapat diselesaikan dengan (p*q) cara.</p>
        <li>Faktorial</li>
        <p>Faktorial adalah hasil kali bilangan asli berurutan dari 1 sampai dengan n.</p>
        <p align="center">n! = n(n-1)(n-2)(n-3)...3*2*1</p>
        <li>Permutasi</li>
        <p>Permutasi adalah urutan yang mungkin dari sejumlah unsur yang berbeda tanpa adanya pengulangan.</p>
        <p align="center">P(n, k) = <sup>n!</sup>/<sub>((n-k)!)</sub></p>
        <li>Jenis-jenis Permutasi</li>
            <li>Permutasi dari n elemen, tiap permutasi terdiri dari n elemen</li>
            <p>P<sub>(n, n)</sub> = n! Atau <sub>n</sub>P<sub>n</sub> = n!</p>>
            <li>Permutasi n elemen, tiap permutasi terdiri dari r unsur dari n elemen r ≤ n.</li>
            <p>P<sub>(n - r)</sub> = <sub>n</sub>P<sub>r</sub> = P<sub>r</sub><sup>n</sup> = <sup>n!</sup>/<sub>((n-r)!)</sub></p>
            <li>Permutasi dari n unsur yang mengandung p. q serta unsur yang sama</li>
            <p>P<sub>(n, k<sub>1</sub>, k<sub>2</sub>, k<sub>t</sub>)</sub> = <sup>n!</sup>/<sub>(k<sub>1</sub>)!k<sub>2</sub>! ... k<sub>t</sub>!</p>
            <li>Permutasi Siklis</li>
            <p><sub>n</sub>P<sub>siklis</sub>  = (n - 1)!</p>
            <li>Permutasi berulang dari n unsur, tipe permutasi terdiri dari k unsur.</li>
            <p>P<sub>n</sub> = n<sup>k</sup></p>
        <li>Kombinasi</li>
        <p>Kombinasi adalah suatu kumpulan unsur tanpa memperhatikan urutannya. Dari suatu himpunan dengan n anggota dapat dibentuk himpunan bagian dengan k unsur (untuk k ≤ n).</p>
        <p align="center">C(n,k) = <sup>n!</sup>/<sub>(k!(n-k)!)</sub></p>
        <li>Binomial Newton</li>
        <p>Binomial Newton merupakan suatu teorema yang menerangkan mengenai pengembangan eksponen dari penjumlahan antara dua variabel (binomial).</p>
        </ul>
        <h2>Latihan</h2>
        <p>1. Sebuah dadu bermata enam dan uang logam dilempar secara bersamaan. Berapa banyak hasil yang mungkin terjadi?</p>
        <p>Jawab:</p>
        <p>Dadu dapat terjadi dengan 6 cara, yaitu dapat muncul angka 1, 2, 3, 4, 5, dan 6. Sedangkan uang logam dapat terjadi dengan 2 cara, yaitu dapat muncul angka (A) dan gambar (G). Berdasarkan prinsip diatas, banyaknya cara hasil yang mungkin adalah (6 x 2) = 12 cara yang berlainan, yaitu: (1G, 1A, 2G, 2A, 3G, 3A, 4G, 4A, 5G, 5A, 6G, 6A).</p>
        <p>2. Nisa akan membeli sebuah mobil di sebuah showroom yang menyediakan 6 jenis mobil sport dan 4 jenis mobil mini bus. Banyak pilihan Nisa untuk membeli mobil adalah</p>
        <p>Jawab:</p>
        <p>Banyak pilihan Nisa membeli mobil adalah = 6 + 4 = 10 pilihan</p>
        <p>3. Pada sebuah pertemuan khusus beranggotakan 6 (enam) fraksi sebuah negara, akan dipasang lambang dari setiap fraksi. Berapa banyak cara untuk menyusun tiap lambang tersebut.</p>
        <p>Jawab:</p>
        <p>n = 6</p>
        <p>P<sub>(n, n)</sub> = n!</p>
        <p>P<sub>(6, 6)</sub> = 6! = 720 cara</p>
        <p>Jadi, penyusunan lambangnya ada 720 cara.</p>
        <h2>Evaluasi</h2>
        <p>1. Dalam suatu pertemuan yang dihadiri oleh 10 orang, masing-masing saling berjabat tangan satu sama lain. Banyak jabat tangan yang terjadi adalah</p>
        <p>A. 10       B. 25       C. 45       D. 90       E. 100</p>
        <p>2. Dari angka-angka 2, 4, 5, 6, dan 7 akan disusun suatu bilangan yang terdiri dari 4 angka. Banyaknya bilangan yang dapat disusun lebih dari 5.000 dan angka-angka itu tidak boleh berulang adalah</p>
        <p>A. 48 bilangan          B. 72 bilangan          C. 120 bilangan             D. 384 bilangan             E. 768 bilangan</p>
        <p>3. Terdapat 7 murid putra dan 4 murid putri terpilih sebagai pelajar teladan. Tetapi hanya terdapat 5 karcis untuk beasiswa dan disyaratkan lagi bahwa paling banyak 2 murid putri saja yang boleh ikut. Banyaknya tim yang dapat yang dapat dibentuk adalah</p>
        <p>A. 300          B. 350          C. 364              D. 371              E. 420</p>
        </body>