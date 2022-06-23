<template>
    <div class="formpage my-5">
        <div class="my-5">
            <h1 class="formpage-header">Sipariş Formu</h1>
            <p>Eğer ürünümüzü beğendiyseniz aşağıdaki sipariş formunu doldurarak ürünümüzü sipariş edebilirsiniz!</p>
        </div>

        <form class="form my-4 mx-auto p-5" @submit.prevent="handleSubmit">
            <div class="name mb-2">
                <label class="form-label" for="name">Adınız</label>
                <input class="form-control" type="text" id="name" required v-model="name">
            </div>
            <div class="surname mb-2">
                <label class="form-label" for="surname">Soyadınız</label>
                <input class="form-control" type="text" id="surname" required v-model="surname">
            </div>
            <div class="city mb-2">
                <label class="form-label" for="city">Şehir</label>
                <input class="form-control" type="text" id="city" required v-model="city">
            </div>
            <div class="address mb-2">
                <label class="form-label" for="address">Adres</label>
                <textarea class="form-control" name="address" id="address" v-model="address" cols="30"
                    rows="10"></textarea>
            </div>
            <div class="phone mb-2">
                <label class="form-label" for="phone">Telefon Numarası</label>
                <input class="form-control" type="number" id="phone" v-model="phone">
            </div>
            <button class="btn btn-primary my-3" type="submit">Sipariş Ver</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: "",
            surname: "",
            city: "",
            address: "",
            phone: "",
        }
    },
    methods: {
        async handleSubmit() {
            let result = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                name: this.name,
                surname: this.surname,
                city: this.city,
                address: this.address,
                phone: this.phone
            });
            console.log(result);
            this.name = ""
            this.surname = ""
            this.city = ""
            this.address = ""
            this.phone = ""
        }
    }
}
</script>

<style lang="scss" scoped>
.formpage {
    width: 60%;

    @media screen and(max-width:900px) {
        width: 80%;
    }

    .form {
        width: 60%;
        border: .5px solid #ddd;
        border-radius: 16px;
        box-shadow: 5px 10px 50px 20px #eee;

        @media screen and(max-width:900px) {
            width: 100%;
        }
    }
}
</style>