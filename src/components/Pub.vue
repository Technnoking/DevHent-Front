<template>
    <div class="postes">
        <div class="header">
            <div class="profile">
                <img src="../assets/imgs/clien2.png" alt="profile">
                <div class="wraper">
                    <p class="name">Andrew Chandra</p>
                    <p class="date">. 25 min ago</p>
                </div>
            </div>
            <div class="teams">
                <img src="../assets/svg/users-solid-b.svg">
                <p>Designing Team</p>
            </div>
        </div><br>
        <article class="articles">
            <h1 class="title">It's task management software.</h1>
            <p class="description">Task management software tools abound in the marketplace. Some are free; others exit for
                enterprise-wide deployment purposes. Some boast enterprise-wide task creation, visualization and notif..</p>
        </article>
        <footer class="footer_pub">
            <div class="heading">
                <svg xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="1634 764 16 16">
                    <g id="heartBlack" transform="translate(1442 684)">
                        <path id="Fill1" fill="none"
                            d="M200,94.486,206.584,88l.986-2.3s-.218-2.695-1.689-3.6S201.925,81.127,200,84c-1.817-2.935-4.822-3.157-6.5-1.4a3.979,3.979,0,0,0,0,5.4C193.574,88.043,200,94.486,200,94.486Z" />
                        <path fill="black"
                            d="M11.75-15.937a4.112,4.112,0,0,1,1.656.336,4.366,4.366,0,0,1,1.352.91,4.22,4.22,0,0,1,.91,1.352A4.162,4.162,0,0,1,16-11.687a4.219,4.219,0,0,1-.324,1.633,4.2,4.2,0,0,1-.918,1.375L8-1.93,1.242-8.68a4.2,4.2,0,0,1-.918-1.375A4.219,4.219,0,0,1,0-11.687,4.162,4.162,0,0,1,.332-13.34a4.22,4.22,0,0,1,.91-1.352,4.366,4.366,0,0,1,1.352-.91,4.112,4.112,0,0,1,1.656-.336,4.124,4.124,0,0,1,1.156.148,3.966,3.966,0,0,1,.941.41,5.036,5.036,0,0,1,.828.629q.395.367.824.8.43-.437.824-.8a5.036,5.036,0,0,1,.828-.629,3.966,3.966,0,0,1,.941-.41A4.124,4.124,0,0,1,11.75-15.937Zm2.3,6.547a3.174,3.174,0,0,0,.7-1.055,3.258,3.258,0,0,0,.242-1.242,3.219,3.219,0,0,0-.25-1.27,3.13,3.13,0,0,0-.691-1.023,3.231,3.231,0,0,0-1.031-.68,3.264,3.264,0,0,0-1.27-.246,3.064,3.064,0,0,0-1.164.207,3.913,3.913,0,0,0-.937.543,7.019,7.019,0,0,0-.824.762q-.395.426-.824.863-.422-.422-.82-.852a7.436,7.436,0,0,0-.832-.773,4.124,4.124,0,0,0-.945-.562,2.9,2.9,0,0,0-1.152-.219,3.185,3.185,0,0,0-1.266.254,3.261,3.261,0,0,0-1.035.7,3.261,3.261,0,0,0-.7,1.035A3.185,3.185,0,0,0,1-11.687a3.213,3.213,0,0,0,.246,1.242,3.225,3.225,0,0,0,.707,1.055L8-3.344Z"
                            transform="translate(192 97)" />
                    </g>
                </svg>
                <img src="../assets/svg/cmtaire.svg" alt="">
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#heart {
    width: 30px;
    cursor: pointer;
}

.postes {
    padding: var(--pad-2);
    border-radius: 10px;
    background-color: #f8f8f8;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        width: 50px;
    }

    .wraper {
        display: flex;
        align-items: center;
        gap: .5rem;

        .name {
            font-size: 1.2rem;
            font-weight: 500;
            color: #23c5ea;
        }
    }

    .date {
        font-size: .8rem;
    }
}

.teams {
    display: flex;
    gap: .5em;
    transition: var(--transition);

    img {
        width: 30px;
    }
}

.articles {
    padding: var(--pad-1);
    margin-left: 3rem;

    .description {
        color: var(--clr-primary-alt);
        font-weight: 400;
    }
}

.heading {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;

    img {
        width: 30px;
        cursor: pointer;
    }
}

@media (max-width:818px) {
    .profile .wraper {
        flex-direction: column;
        align-items: flex-start;
        gap: .2rem;
    }

    .teams {
        background: var(--clr-accent);
        padding: .5rem;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            background: var(--clr-accent-alt);
        }

        p {
            display: none;
        }
    }
}
</style>