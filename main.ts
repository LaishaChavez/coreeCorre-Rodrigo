scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Verity.isHittingTile(CollisionDirection.Bottom)) {
        Salto = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Salto < maxSalto) {
        Salto += 1
        Verity.vy = -100
    }
})
let Salto = 0
let maxSalto = 0
let Verity: Sprite = null
Verity = sprites.create(assets.image`Poder01`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Cucu`)
controller.moveSprite(Verity, 150, 0)
Verity.setStayInScreen(true)
Verity.ay = 250
tiles.setCurrentTilemap(tilemap`nivel1`)
maxSalto = 2
