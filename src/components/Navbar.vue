<template>
    <nav class="container">
        <div class="navbrand">
            <RouterLink class="brand" to="/">LoremIpsum</RouterLink>
        </div>

        <div class="navlinks">
            <RouterLink class="navlink" to="/">Home</RouterLink>
            <RouterLink class="navlink" to="/form">Form</RouterLink>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 25px;

    & a {
        text-decoration: none;
        color: white;
        margin: 0 8px;
        transition: .4s ease all;

        &:hover {
            color: white;
        }
    }

    .navlink {
        font-size: 20px;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            height: 2px;
            background-color: white;
            bottom: 0;
            left: 0;
            width: 100%;
            transform-origin: left;
            transform: scaleX(0);
            transition: .4s ease;
        }

        &:hover::before {
            transform: scaleX(1);
        }
    }

    .brand {
        font-size: 30px;

        &:hover {
            color: #999;
        }
    }
}
</style>