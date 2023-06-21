if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: 'mongodb+srv://ellipa:ellias1227*@cluster0.d1zzpfm.mongodb.net/'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}