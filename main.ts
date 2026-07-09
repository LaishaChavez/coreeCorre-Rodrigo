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
game.onUpdate(function () {
    Verity.setImage(assets.image`Right`)
    if (Verity.vx == 0) {
        Verity.setImage(assets.image`idle`)
    }
    if (Verity.vy < 0) {
        Verity.setImage(assets.image`miImagen1`)
    } else if (Verity.vy > 0) {
        Verity.setImage(assets.image`VerityLaBolaAmarilla0saltando`)
    } else if (Verity.vx > 0) {
        Verity.setImage(assets.image`Right`)
    }
    if (Verity.vx < 0) {
        Verity.image.flipX()
        Verity.setImage(Verity.image)
    }
})
