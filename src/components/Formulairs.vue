<template>
    <div class="container-form">
        <div class="formulairs">
            <!-- LogIn -->
            <div class="log">
                <h2>Login</h2>
                <form action="">
                    <div class="user_box">
                        <input type="text" name="matricul" required>
                        <label for="">Numeros matricul</label>
                    </div>
                    <div class="user_box">
                        <input type="password" name="password" required>
                        <label for="password">Mot de passe</label>
                    </div>

                    <!-- span -->
                    <button type="sublit" class="btn">Se connecter</button>
                </form>
            </div>
            <!-- SingUp -->
            <div class="log">
                <h2>Login</h2>
                <form action="">
                    <div class="user_box">
                        <input type="text" name="nom" required>
                        <label for="">Nom et Prenom</label>
                    </div>
                    <div class="user_box">
                        <input type="text" name="prenom" required>
                        <label for="">Numeros matricule</label>
                    </div>
                    <div class="user_box">
                        <input type="text" name="Adresse_e-mail" required>
                        <label for="">Adresse e</label>
                    </div>
                    <div class="user_box">
                        <input type="password" name="creer_password" required>
                        <label for="password">Nouveau mot de passe</label>
                    </div>
                    <div class="user_box">
                        <input type="password" name="confirme" required>
                        <label for="password">Confirme mot de passe</label>
                    </div>

                    <!-- span -->
                    <button type="sublit" class="btn">Créer un compte</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Form",
}
</script>

<style lang="scss" scoped>

.container-form {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(#141e30, #243b55);
}
.formulairs {
    display: flex;
    align-items: start;
    justify-content: center;
    // border: 1px solid #03e9f4;
}
// Log_in
.log {
    // position: absolute;
    // top: 50%;
    // left: 50%;
    width: 400px;
    padding: 40px;
    // transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 5px;

    h2 {
        margin: 0 0 30px;
        padding: 0;
        color: #fff;
        text-align: center;
    }

    .user_box {
        position: relative;

        label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            pointer-events: none;
            transition: .5s;
        }

        input {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;

            &:focus~label,
            &:valid~label {
                top: -20px;
                left: 0;
                color: #03e9f4;
                font-size: 12px;
            }
        }
    }
}

.btn {
    position: relative;
    padding: 10px 20px;
    color: #ffffff;
    border: 1px solid #ffffff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 40px;
    letter-spacing: 4px;
    transition: all .28s ease-out;
    overflow: hidden;
    z-index: 0;

    &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #03e9f4;
        transition: all .28s ease-out;
        transform: translateY(100px);
        z-index: -1;
    }

    &:hover::before {
        transform: translateY(0);
    }
}
</style>