<template>
    <div class="formpage">
        <div class="formpage">
            <h1 class="formpage-header">Sipariş Formu</h1>
            <p>Eğer ürünümüzü beğendiyseniz aşağıdaki sipariş formunu doldurarak ürünümüzü sipariş edebilirsiniz!</p>
        </div>

        <form class="form" @submit.prevent="handleSubmit">
            <div class="name">
                <label for="name">Adınız</label>
                <input type="text" id="name" required v-model="obj.name">
            </div>
            <div class="surname">
                <label for="surname">Soyadınız</label>
                <input type="text" id="surname" required v-model="obj.surname">
            </div>
            <div class="city">
                <label for="city">Şehir</label>
                <input type="text" id="city" required v-model="obj.city">
            </div>
            <div class="address">
                <label for="address">Adres</label>
                <textarea name="address" id="address" v-model="obj.address" cols="30" rows="10"></textarea>
            </div>
            <div class="phone">
                <label for="phone">Telefon Numarası</label>
                <input type="tel" id="phone" v-model="obj.phone">
            </div>
            <button type="submit">Sipariş Ver</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
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
            let result = await axios.post("https://jsonplaceholder.typicode.com/posts",{
                name:this.obj.name,
                surname:this.obj.surname,
                city:this.obj.city,
                address:this.obj.address,
                phone:this.obj.phone
            });
            console.log(result)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>