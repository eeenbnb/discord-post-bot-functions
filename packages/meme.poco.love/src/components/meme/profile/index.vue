<template>
  <section class="profile">
    <!--  -->
    <div class="profile__image">
      <img class="profile__image__img" src="@/assets/img/meme_profile.jpg" />
    </div>

    <!--  -->
    <div class="profile__contents">
      <!--  -->
      <p class="profile__contents__name">
        めめぽこ
        <span class="profile__contents__name--sub">meme_poco</span>
      </p>
      <!--  -->
      <p class="profile__contents__one">
        好きな食べ物：エビ、イケメン、カリフラワー、
      </p>
      <p class="profile__contents__one">
        趣味：ゲームと男漁り
      </p>
      <p class="profile__contents__one">
        好きな言葉：カス、ゴミ、死んだ、かちくらわすぞ
      </p>
      <p class="profile__contents__one">
        夢：素敵な旦那様のお嫁さんになること
      </p>
      <p class="profile__contents__one">
        資産：マンションを5棟保持、収益を再投資で更に資産を増やし続ける。
      </p>
      <p class="profile__contents__one">
        カレーライス：ターメリック多めが好き。
      </p>

      <p class="profile__contents__one add-margin">
        マージン上：.add-margin
      </p>
      <p class="profile__contents__one">
        ゴミ：うどんのにこみ
      </p>
      <p class="profile__contents__one">
        カス：うどんのにこみ
      </p>
      <!--  -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 112px;

  &__image {
    margin-right: 42px;
    margin-bottom: 40px;
    box-shadow: 42px 40px 0px 0 #FAEFB5;
    border-radius: 10px;
    overflow: hidden;

    transition: all 300ms;

    &:hover {
      transform: scale(1.2);
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__contents {
    &__name {
      margin-bottom: 20px;
      font-size: 42px;
      font-weight: bold;

      &--sub {
        font-size: 20px;
        font-weight: normal;
        color: #CCCCCC;
      }
    }

    &__one {
      margin-bottom: 12px;
      font-size: 15px;
      line-height: 1;

      &.add-margin {
        margin-top: 24px;
      }
    }
  }
}
</style>