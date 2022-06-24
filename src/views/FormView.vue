<template>
    <div class="formpage my-5">
        <div class="my-5">
            <h1 class="formpage-header">Sipariş Formu</h1>
            <p>Eğer ürünümüzü beğendiyseniz aşağıdaki sipariş formunu doldurarak ürünümüzü sipariş edebilirsiniz!</p>
        </div>

        <form class="form my-4 mx-auto p-5" @submit.prevent="handleSubmit">
            <div class="name mb-2">
                <label class="form-label" for="name">Adınız</label>
                <input class="form-control" type="text" id="name" required v-model="obj.name">
            </div>
            <div class="surname mb-2">
                <label class="form-label" for="surname">Soyadınız</label>
                <input class="form-control" type="text" id="surname" required v-model="obj.surname">
            </div>
            <div class="city mb-2">
                <label class="form-label" for="city">Şehir</label>
                <input class="form-control" type="text" id="city" required v-model="obj.city">
            </div>
            <div class="address mb-2">
                <label class="form-label" for="address">Adres</label>
                <textarea class="form-control" name="address" id="address" v-model="obj.address" cols="30"
                    rows="10"></textarea>
            </div>
            <div class="phone mb-2">
                <label class="form-label" for="phone">Telefon Numarası</label>
                <input class="form-control" type="number" id="phone" v-model="obj.phone">
            </div>
            <button class="btn btn-primary my-3" type="submit">Sipariş Ver</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            obj: {
                name: "",
                surname: "",
                city: "",
                address: "",
                phone: "",
            }
        }
    },
    methods: {
        async handleSubmit() {
            let result = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                name: this.obj.name,
                surname: this.obj.surname,
                city: this.obj.city,
                address: this.obj.address,
                phone: this.obj.phone
            });
            console.log(result);
            this.obj.name = ""
            this.obj.surname = ""
            this.obj.city = ""
            this.obj.address = ""
            this.obj.phone = ""
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