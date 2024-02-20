/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

 

 const personAccount = {
    firstName: '',
    lastName: '',
    incomes: [],
    expenses: [],
    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo: function() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
        this.incomes.push({description: description, amount: amount});
    },
    addExpense: function(description, amount) {
        this.expenses.push({description: description, amount: amount});
    }, accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

/* personAccount adında bir nesne oluşturduk. Bu nesnenin firstName, lastName, incomes, expenses gibi özellikleri (properties) ve totalIncome, totalExpense, accountInfo, addIncome, addExpense ve accountBalance gibi metotları (methods) bulunuyor.

firstName ve lastName özellikleri kişinin adını ve soyadını temsil ediyor.
incomes ve expenses özellikleri gelir ve giderleri tutan diziler. Her bir girdi, bir miktar ve bu miktarın açıklamasını içeren bir nesne.
totalIncome ve totalExpense metotları sırasıyla toplam gelir ve gideri hesaplıyor.
accountInfo metodu hesap bilgilerini bir dize olarak döndürüyor.
addIncome ve addExpense metotları yeni bir gelir veya gider ekliyor.
accountBalance metodu hesap bakiyesini, toplam gelirden toplam gideri çıkararak hesaplıyor.
Bu nesne, bir kişinin finansal durumunu takip etmek için kullanılabilir. İstediğiniz gibi firstName ve lastName özelliklerini ayarlayabilirsiniz. */

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ]
  /*   magine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account. */

  function signUp(user) {
    // Kullanıcının zaten var olup olmadığını kontrol edin
    const existingUser = users.find(u => u.username === user.username || u.email === user.email);

    if (existingUser) {
        return 'Zaten bir hesabınız var.';
    } else {
        // Yeni kullanıcıyı koleksiyona ekleyin
        users.push(user);
        return 'Hesabınız başarıyla oluşturuldu.';
    }
}

/* Bu kod parçacığı, signUp fonksiyonunu tanımlar ve bir newUser oluşturarak bu fonksiyonu test eder. Fonksiyon, yeni kullanıcının username veya email özelliklerinin zaten mevcut bir kullanıcıda olup olmadığını kontrol eder. Eğer öyleyse, fonksiyon bir hata mesajı döndürür. Aksi takdirde, yeni kullanıcıyı users koleksiyonuna ekler ve başarılı bir mesaj döndürür. Bu, MongoDB veritabanından gelen kullanıcı koleksiyonlarıyla çalışırken yaygın bir yaklaşımdır. */

/* Create a function called signIn which allows user to sign in to the application */

function signIn(username, password) {
    // Kullanıcının var olup olmadığını kontrol edin
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Kullanıcıyı giriş yapmış olarak işaretleyin
        user.isLoggedIn = true;
        return 'Başarıyla giriş yaptınız!';
    } else {
        return 'Kullanıcı adı veya şifre hatalı.';
    }
}

// signIn fonksiyonunu test edin
console.log(signIn('Alex', '123123'));

/* Bu kod parçacığı, signIn fonksiyonunu tanımlar ve bir kullanıcının giriş yapmasını test eder. Fonksiyon, verilen username ve password özelliklerine sahip bir kullanıcının olup olmadığını kontrol eder. Eğer öyleyse, kullanıcının isLoggedIn özelliğini true olarak ayarlar ve başarılı bir mesaj döndürür. Aksi takdirde, fonksiyon bir hata mesajı döndürür. */