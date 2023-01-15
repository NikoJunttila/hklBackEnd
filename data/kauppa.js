const KauppaData = [
    
    {
      categoria:"hoidot",
      tuote:"hieronta",
      hinta:55.5,
      määrä: 2,
      kuvaus:"legit cba xdddd",
      kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
    },
    {
        categoria:"hoidot",
        tuote:"kallis hieronta",
        hinta:44,
        määrä: 2,
        kuvaus:"hierontaa",
        kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
      },
      {
        categoria:"kirjat",
        tuote:"kirja",
        hinta:20,
        määrä: 11,
        kuvaus:"voit lukee tätä",
        kuva:"https://cdn.holvi.com/media/poolimage.image/2022/07/31/52e332b7f7c3c98ec336c929ec6b1fb10756af98.jpg"
      },
      {
        categoria:"joulukalenterit",
        tuote:"joulukalenteri",
        hinta:55.5,
        määrä: 2,
        kuvaus:"joulukalenteri hommeli",
        kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
      },
      {
        categoria:"mugi",
        tuote:"mugi",
        hinta:999,
        määrä: 1,
        kuvaus:"best waifu",
        kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
      },
      {
        categoria:"hoidot",
        tuote:"xddd",
        hinta:5,
        määrä: 2,
        kuvaus:"trollner",
        kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
      },
      {
        categoria:"cba",
        tuote:"kys",
        hinta:55.5,
        määrä: 2,
        kuvaus:"git gud",
        kuva:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c1a492c-e3f4-49b3-b227-b43dd7c051ff/d8lx6j9-514f878b-9478-4024-90d4-f67a6ae51ee9.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMWE0OTJjLWUzZjQtNDliMy1iMjI3LWI0M2RkN2MwNTFmZlwvZDhseDZqOS01MTRmODc4Yi05NDc4LTQwMjQtOTBkNC1mNjdhNmFlNTFlZTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I-iwoPX0wWfA3YQfNjnygHTJ12uY8gqOPsl3h8cQazg"
      },


] 

module.exports = KauppaData