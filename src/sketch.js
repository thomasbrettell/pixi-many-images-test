import {
  Application,
  Assets,
  Container,
  Sprite,
  Rectangle,
  Spritesheet,
  Texture,
} from "pixi.js";

export const initSketch = async (mountEl) => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: "#1099bb", resizeTo: window });

  mountEl.appendChild(app.canvas);

  const sheet = await Assets.load("./mask-spritesheet/spritesheet-0.json");

  console.log(sheet);

  const textures = {
    ...sheet.textures,
    ...sheet.linkedSheets.reduce((acc, sheet) => {
      return {
        ...acc,
        ...sheet.textures,
      };
    }, {}),
  };
  const textureKeys = Object.keys(textures);

  const sprites = new Container();

  app.stage.addChild(sprites);

  // Create an array to store all the sprites
  const maggots = [];

  const totalSprites = textureKeys.length;

  for (let i = 0; i < totalSprites; i++) {
    const texture = textures[textureKeys[i]];
    // Create a new maggot Sprite
    const dude = new Sprite(texture);

    // Set the anchor point so the texture is centerd on the sprite
    dude.anchor.set(0.5);

    // Different maggots, different sizes
    dude.scale.set(0.15);

    // Scatter them all
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height;

    dude.tint = Math.random() * 0x808080;

    // Create a random direction in radians
    dude.direction = Math.random() * Math.PI * 2;

    // This number will be used to modify the direction of the sprite over time
    dude.turningSpeed = Math.random() - 0.8;

    // Create a random speed between 0 - 2, and these maggots are slooww
    dude.speed = (2 + Math.random() * 2) * 0.2;

    dude.offset = Math.random() * 100;

    // Finally we push the dude into the maggots array so it it can be easily accessed later
    maggots.push(dude);

    sprites.addChild(dude);
  }

  // Create a bounding box box for the little maggots
  const dudeBoundsPadding = 100;
  const dudeBounds = new Rectangle(
    -dudeBoundsPadding,
    -dudeBoundsPadding,
    app.screen.width + dudeBoundsPadding * 2,
    app.screen.height + dudeBoundsPadding * 2
  );

  let tick = 0;

  app.ticker.add(() => {
    // Iterate through the sprites and update their position
    for (let i = 0; i < maggots.length; i++) {
      const dude = maggots[i];

      dude.direction += dude.turningSpeed * 0.01;
      dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
      dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
    }

    // Increment the ticker
    tick += 0.1;
  });
};

//

const IMAGE_NAMES = [
  "adelaide-01-mask.png",
  "adelaide-02-mask.png",
  "adelaide-03-mask.png",
  "adelaide-04-mask.png",
  "adelaide-05-mask.png",
  "adelaide-06-mask.png",
  "adelaide-07-mask.png",
  "adelaide-08-mask.png",
  "adelaide-09-mask.png",
  "adelaide-10-mask.png",
  "adelaide-11-mask.png",
  "adelaide-12-mask.png",
  "adelaide-13-mask.png",
  "adelaide-14-mask.png",
  "adelaide-15-mask.png",
  "adelaide-16-mask.png",
  "adelaide-17-mask.png",
  "adelaide-19-mask.png",
  "adelaide-20-mask.png",
  "adelaide-21-mask.png",
  "adelaide-22-mask.png",
  "adelaide-23-mask.png",
  "adelaide-24-mask.png",
  "adelaide-25-mask.png",
  "adelaide-26-mask.png",
  "adelaide-27-mask.png",
  "adelaide-28-mask.png",
  "adelaide-29-mask.png",
  "adelaide-30-mask.png",
  "adelaide-31-mask.png",
  "adelaide-32-mask.png",
  "adelaide-33-mask.png",
  "adelaide-34-mask.png",
  "adelaide-35-mask.png",
  "adelaide-36-mask.png",
  "adelaide-37-mask.png",
  "adelaide-38-mask.png",
  "adelaide-40-mask.png",
  "adelaide-41-mask.png",
  "adelaide-43-mask.png",
  "adelaide-44-mask.png",
  "adelaide-45-mask.png",
  "adelaide-48-mask.png",
  "brisbane-01-mask.png",
  "brisbane-02-mask.png",
  "brisbane-03-mask.png",
  "brisbane-04-mask.png",
  "brisbane-05-mask.png",
  "brisbane-06-mask.png",
  "brisbane-07-mask.png",
  "brisbane-08-mask.png",
  "brisbane-09-mask.png",
  "brisbane-11-mask.png",
  "brisbane-12-mask.png",
  "brisbane-13-mask.png",
  "brisbane-14-mask.png",
  "brisbane-15-mask.png",
  "brisbane-16-mask.png",
  "brisbane-17-mask.png",
  "brisbane-18-mask.png",
  "brisbane-19-mask.png",
  "brisbane-20-mask.png",
  "brisbane-21-mask.png",
  "brisbane-22-mask.png",
  "brisbane-23-mask.png",
  "brisbane-24-mask.png",
  "brisbane-25-mask.png",
  "brisbane-26-mask.png",
  "brisbane-27-mask.png",
  "brisbane-28-mask.png",
  "brisbane-29-mask.png",
  "brisbane-30-mask.png",
  "brisbane-31-mask.png",
  "brisbane-32-mask.png",
  "brisbane-33-mask.png",
  "brisbane-34-mask.png",
  "brisbane-35-mask.png",
  "brisbane-36-mask.png",
  "brisbane-37-mask.png",
  "brisbane-38-mask.png",
  "brisbane-39-mask.png",
  "brisbane-40-mask.png",
  "brisbane-41-mask.png",
  "brisbane-43-mask.png",
  "brisbane-44-mask.png",
  "brisbane-45-mask.png",
  "brisbane-46-mask.png",
  "bulldogs-01-mask.png",
  "bulldogs-02-mask.png",
  "bulldogs-03-mask.png",
  "bulldogs-04-mask.png",
  "bulldogs-05-mask.png",
  "bulldogs-06-mask.png",
  "bulldogs-07-mask.png",
  "bulldogs-08-mask.png",
  "bulldogs-09-mask.png",
  "bulldogs-10-mask.png",
  "bulldogs-11-mask.png",
  "bulldogs-12-mask.png",
  "bulldogs-13-mask.png",
  "bulldogs-14-mask.png",
  "bulldogs-15-mask.png",
  "bulldogs-16-mask.png",
  "bulldogs-17-mask.png",
  "bulldogs-18-mask.png",
  "bulldogs-19-mask.png",
  "bulldogs-20-mask.png",
  "bulldogs-21-mask.png",
  "bulldogs-22-mask.png",
  "bulldogs-23-mask.png",
  "bulldogs-24-mask.png",
  "bulldogs-25-mask.png",
  "bulldogs-26-mask.png",
  "bulldogs-27-mask.png",
  "bulldogs-28-mask.png",
  "bulldogs-29-mask.png",
  "bulldogs-30-mask.png",
  "bulldogs-31-mask.png",
  "bulldogs-32-mask.png",
  "bulldogs-33-mask.png",
  "bulldogs-34-mask.png",
  "bulldogs-35-mask.png",
  "bulldogs-36-mask.png",
  "bulldogs-37-mask.png",
  "bulldogs-38-mask.png",
  "bulldogs-39-mask.png",
  "bulldogs-40-mask.png",
  "bulldogs-42-mask.png",
  "bulldogs-43-mask.png",
  "bulldogs-44-mask.png",
  "carlton-01-mask.png",
  "carlton-02-mask.png",
  "carlton-03-mask.png",
  "carlton-04-mask.png",
  "carlton-05-mask.png",
  "carlton-06-mask.png",
  "carlton-07-mask.png",
  "carlton-08-mask.png",
  "carlton-09-mask.png",
  "carlton-10-mask.png",
  "carlton-11-mask.png",
  "carlton-12-mask.png",
  "carlton-13-mask.png",
  "carlton-14-mask.png",
  "carlton-15-mask.png",
  "carlton-16-mask.png",
  "carlton-17-mask.png",
  "carlton-18-mask.png",
  "carlton-19-mask.png",
  "carlton-20-mask.png",
  "carlton-21-mask.png",
  "carlton-22-mask.png",
  "carlton-23-mask.png",
  "carlton-24-mask.png",
  "carlton-25-mask.png",
  "carlton-27-mask.png",
  "carlton-28-mask.png",
  "carlton-29-mask.png",
  "carlton-30-mask.png",
  "carlton-31-mask.png",
  "carlton-32-mask.png",
  "carlton-33-mask.png",
  "carlton-34-mask.png",
  "carlton-35-mask.png",
  "carlton-37-mask.png",
  "carlton-38-mask.png",
  "carlton-39-mask.png",
  "carlton-40-mask.png",
  "carlton-41-mask.png",
  "carlton-42-mask.png",
  "carlton-43-mask.png",
  "carlton-44-mask.png",
  "carlton-45-mask.png",
  "carlton-46-mask.png",
  "collingwood-01-mask.png",
  "collingwood-02-mask.png",
  "collingwood-03-mask.png",
  "collingwood-04-mask.png",
  "collingwood-05-mask.png",
  "collingwood-06-mask.png",
  "collingwood-07-mask.png",
  "collingwood-08-mask.png",
  "collingwood-09-mask.png",
  "collingwood-10-mask.png",
  "collingwood-11-mask.png",
  "collingwood-12-mask.png",
  "collingwood-13-mask.png",
  "collingwood-14-mask.png",
  "collingwood-15-mask.png",
  "collingwood-16-mask.png",
  "collingwood-17-mask.png",
  "collingwood-18-mask.png",
  "collingwood-19-mask.png",
  "collingwood-21-mask.png",
  "collingwood-22-mask.png",
  "collingwood-23-mask.png",
  "collingwood-24-mask.png",
  "collingwood-25-mask.png",
  "collingwood-26-mask.png",
  "collingwood-27-mask.png",
  "collingwood-28-mask.png",
  "collingwood-29-mask.png",
  "collingwood-30-mask.png",
  "collingwood-31-mask.png",
  "collingwood-32-mask.png",
  "collingwood-33-mask.png",
  "collingwood-34-mask.png",
  "collingwood-35-mask.png",
  "collingwood-36-mask.png",
  "collingwood-37-mask.png",
  "collingwood-38-mask.png",
  "collingwood-39-mask.png",
  "collingwood-40-mask.png",
  "collingwood-41-mask.png",
  "collingwood-43-mask.png",
  "collingwood-45-mask.png",
  "collingwood-46-mask.png",
  "essendon-01-mask.png",
  "essendon-02-mask.png",
  "essendon-03-mask.png",
  "essendon-04-mask.png",
  "essendon-05-mask.png",
  "essendon-06-mask.png",
  "essendon-07-mask.png",
  "essendon-08-mask.png",
  "essendon-09-mask.png",
  "essendon-10-mask.png",
  "essendon-11-mask.png",
  "essendon-12-mask.png",
  "essendon-13-mask.png",
  "essendon-14-mask.png",
  "essendon-15-mask.png",
  "essendon-16-mask.png",
  "essendon-17-mask.png",
  "essendon-18-mask.png",
  "essendon-19-mask.png",
  "essendon-20-mask.png",
  "essendon-21-mask.png",
  "essendon-22-mask.png",
  "essendon-23-mask.png",
  "essendon-24-mask.png",
  "essendon-25-mask.png",
  "essendon-26-mask.png",
  "essendon-27-mask.png",
  "essendon-28-mask.png",
  "essendon-29-mask.png",
  "essendon-30-mask.png",
  "essendon-31-mask.png",
  "essendon-32-mask.png",
  "essendon-33-mask.png",
  "essendon-34-mask.png",
  "essendon-35-mask.png",
  "essendon-36-mask.png",
  "essendon-37-mask.png",
  "essendon-38-mask.png",
  "essendon-39-mask.png",
  "essendon-40-mask.png",
  "essendon-47-mask.png",
  "essendon-49-mask.png",
  "fremantle-01-mask.png",
  "fremantle-02-mask.png",
  "fremantle-03-mask.png",
  "fremantle-04-mask.png",
  "fremantle-05-mask.png",
  "fremantle-06-mask.png",
  "fremantle-07-mask.png",
  "fremantle-08-mask.png",
  "fremantle-09-mask.png",
  "fremantle-10-mask.png",
  "fremantle-11-mask.png",
  "fremantle-12-mask.png",
  "fremantle-13-mask.png",
  "fremantle-14-mask.png",
  "fremantle-15-mask.png",
  "fremantle-17-mask.png",
  "fremantle-18-mask.png",
  "fremantle-19-mask.png",
  "fremantle-20-mask.png",
  "fremantle-21-mask.png",
  "fremantle-22-mask.png",
  "fremantle-23-mask.png",
  "fremantle-24-mask.png",
  "fremantle-25-mask.png",
  "fremantle-26-mask.png",
  "fremantle-27-mask.png",
  "fremantle-28-mask.png",
  "fremantle-29-mask.png",
  "fremantle-30-mask.png",
  "fremantle-31-mask.png",
  "fremantle-32-mask.png",
  "fremantle-33-mask.png",
  "fremantle-34-mask.png",
  "fremantle-35-mask.png",
  "fremantle-36-mask.png",
  "fremantle-37-mask.png",
  "fremantle-38-mask.png",
  "fremantle-39-mask.png",
  "fremantle-40-mask.png",
  "fremantle-41-mask.png",
  "fremantle-42-mask.png",
  "fremantle-43-mask.png",
  "fremantle-44-mask.png",
  "fremantle-45-mask.png",
  "fremantle-46-mask.png",
  "geelong-01-mask.png",
  "geelong-02-mask.png",
  "geelong-03-mask.png",
  "geelong-04-mask.png",
  "geelong-05-mask.png",
  "geelong-06-mask.png",
  "geelong-07-mask.png",
  "geelong-08-mask.png",
  "geelong-09-mask.png",
  "geelong-10-mask.png",
  "geelong-11-mask.png",
  "geelong-12-mask.png",
  "geelong-13-mask.png",
  "geelong-14-mask.png",
  "geelong-15-mask.png",
  "geelong-16-mask.png",
  "geelong-17-mask.png",
  "geelong-18-mask.png",
  "geelong-19-mask.png",
  "geelong-20-mask.png",
  "geelong-21-mask.png",
  "geelong-22-mask.png",
  "geelong-23-mask.png",
  "geelong-24-mask.png",
  "geelong-26-mask.png",
  "geelong-28-mask.png",
  "geelong-29-mask.png",
  "geelong-30-mask.png",
  "geelong-31-mask.png",
  "geelong-32-mask.png",
  "geelong-33-mask.png",
  "geelong-34-mask.png",
  "geelong-35-mask.png",
  "geelong-36-mask.png",
  "geelong-37-mask.png",
  "geelong-38-mask.png",
  "geelong-39-mask.png",
  "geelong-40-mask.png",
  "geelong-41-mask.png",
  "geelong-42-mask.png",
  "geelong-43-mask.png",
  "geelong-44-mask.png",
  "geelong-45-mask.png",
  "geelong-46-mask.png",
  "goldcoast-02-mask.png",
  "goldcoast-03-mask.png",
  "goldcoast-04-mask.png",
  "goldcoast-05-mask.png",
  "goldcoast-06-mask.png",
  "goldcoast-07-mask.png",
  "goldcoast-08-mask.png",
  "goldcoast-09-mask.png",
  "goldcoast-10-mask.png",
  "goldcoast-11-mask.png",
  "goldcoast-12-mask.png",
  "goldcoast-13-mask.png",
  "goldcoast-14-mask.png",
  "goldcoast-15-mask.png",
  "goldcoast-16-mask.png",
  "goldcoast-17-mask.png",
  "goldcoast-18-mask.png",
  "goldcoast-19-mask.png",
  "goldcoast-20-mask.png",
  "goldcoast-21-mask.png",
  "goldcoast-22-mask.png",
  "goldcoast-23-mask.png",
  "goldcoast-24-mask.png",
  "goldcoast-25-mask.png",
  "goldcoast-26-mask.png",
  "goldcoast-27-mask.png",
  "goldcoast-28-mask.png",
  "goldcoast-29-mask.png",
  "goldcoast-30-mask.png",
  "goldcoast-31-mask.png",
  "goldcoast-32-mask.png",
  "goldcoast-33-mask.png",
  "goldcoast-34-mask.png",
  "goldcoast-35-mask.png",
  "goldcoast-36-mask.png",
  "goldcoast-37-mask.png",
  "goldcoast-38-mask.png",
  "goldcoast-40-mask.png",
  "goldcoast-41-mask.png",
  "goldcoast-42-mask.png",
  "goldcoast-44-mask.png",
  "goldcoast-45-mask.png",
  "goldcoast-46-mask.png",
  "goldcoast-47-mask.png",
  "goldcoast-49-mask.png",
  "goldcoast-50-mask.png",
  "gws-02-mask.png",
  "gws-03-mask.png",
  "gws-04-mask.png",
  "gws-05-mask.png",
  "gws-06-mask.png",
  "gws-07-mask.png",
  "gws-08-mask.png",
  "gws-09-mask.png",
  "gws-10-mask.png",
  "gws-11-mask.png",
  "gws-12-mask.png",
  "gws-13-mask.png",
  "gws-14-mask.png",
  "gws-15-mask.png",
  "gws-16-mask.png",
  "gws-17-mask.png",
  "gws-18-mask.png",
  "gws-19-mask.png",
  "gws-20-mask.png",
  "gws-21-mask.png",
  "gws-22-mask.png",
  "gws-23-mask.png",
  "gws-24-mask.png",
  "gws-25-mask.png",
  "gws-26-mask.png",
  "gws-27-mask.png",
  "gws-28-mask.png",
  "gws-29-mask.png",
  "gws-30-mask.png",
  "gws-31-mask.png",
  "gws-32-mask.png",
  "gws-33-mask.png",
  "gws-34-mask.png",
  "gws-35-mask.png",
  "gws-36-mask.png",
  "gws-37-mask.png",
  "gws-39-mask.png",
  "gws-40-mask.png",
  "gws-41-mask.png",
  "gws-42-mask.png",
  "gws-43-mask.png",
  "gws-44-mask.png",
  "gws-45-mask.png",
  "gws-46-mask.png",
  "hawthorn-01-mask.png",
  "hawthorn-02-mask.png",
  "hawthorn-03-mask.png",
  "hawthorn-04-mask.png",
  "hawthorn-05-mask.png",
  "hawthorn-06-mask.png",
  "hawthorn-07-mask.png",
  "hawthorn-08-mask.png",
  "hawthorn-09-mask.png",
  "hawthorn-10-mask.png",
  "hawthorn-11-mask.png",
  "hawthorn-12-mask.png",
  "hawthorn-13-mask.png",
  "hawthorn-14-mask.png",
  "hawthorn-15-mask.png",
  "hawthorn-16-mask.png",
  "hawthorn-17-mask.png",
  "hawthorn-18-mask.png",
  "hawthorn-19-mask.png",
  "hawthorn-20-mask.png",
  "hawthorn-21-mask.png",
  "hawthorn-22-mask.png",
  "hawthorn-23-mask.png",
  "hawthorn-24-mask.png",
  "hawthorn-25-mask.png",
  "hawthorn-26-mask.png",
  "hawthorn-27-mask.png",
  "hawthorn-27.png",
  "hawthorn-28-mask.png",
  "hawthorn-29-mask.png",
  "hawthorn-30-mask.png",
  "hawthorn-31-mask.png",
  "hawthorn-32-mask.png",
  "hawthorn-33-mask.png",
  "hawthorn-34-mask.png",
  "hawthorn-35-mask.png",
  "hawthorn-36-mask.png",
  "hawthorn-37-mask.png",
  "hawthorn-38-mask.png",
  "hawthorn-40-mask.png",
  "hawthorn-41-mask.png",
  "hawthorn-42-mask.png",
  "hawthorn-43-mask.png",
  "hawthorn-44-mask.png",
  "hawthorn-45-mask.png",
  "melbourne-01-mask.png",
  "melbourne-02-mask.png",
  "melbourne-03-mask.png",
  "melbourne-04-mask.png",
  "melbourne-05-mask.png",
  "melbourne-06-mask.png",
  "melbourne-07-mask.png",
  "melbourne-08-mask.png",
  "melbourne-09-mask.png",
  "melbourne-10-mask.png",
  "melbourne-11-mask.png",
  "melbourne-12-mask.png",
  "melbourne-13-mask.png",
  "melbourne-14-mask.png",
  "melbourne-15-mask.png",
  "melbourne-16-mask.png",
  "melbourne-17-mask.png",
  "melbourne-18-mask.png",
  "melbourne-19-mask.png",
  "melbourne-20-mask.png",
  "melbourne-21-mask.png",
  "melbourne-22-mask.png",
  "melbourne-23-mask.png",
  "melbourne-24-mask.png",
  "melbourne-25-mask.png",
  "melbourne-26-mask.png",
  "melbourne-27-mask.png",
  "melbourne-28-mask.png",
  "melbourne-29-mask.png",
  "melbourne-30-mask.png",
  "melbourne-31-mask.png",
  "melbourne-32-mask.png",
  "melbourne-33-mask.png",
  "melbourne-35-mask.png",
  "melbourne-36-mask.png",
  "melbourne-38-mask.png",
  "melbourne-39-mask.png",
  "melbourne-40-mask.png",
  "melbourne-41-mask.png",
  "melbourne-42-mask.png",
  "melbourne-43-mask.png",
  "melbourne-45-mask.png",
  "melbourne-50-mask.png",
  "northmelbourne-01-mask.png",
  "northmelbourne-02-mask.png",
  "northmelbourne-03-mask.png",
  "northmelbourne-04-mask.png",
  "northmelbourne-05-mask.png",
  "northmelbourne-06-mask.png",
  "northmelbourne-07-mask.png",
  "northmelbourne-08-mask.png",
  "northmelbourne-09-mask.png",
  "northmelbourne-10-mask.png",
  "northmelbourne-11-mask.png",
  "northmelbourne-12-mask.png",
  "northmelbourne-13-mask.png",
  "northmelbourne-14-mask.png",
  "northmelbourne-15-mask.png",
  "northmelbourne-16-mask.png",
  "northmelbourne-17-mask.png",
  "northmelbourne-18-mask.png",
  "northmelbourne-19-mask.png",
  "northmelbourne-20-mask.png",
  "northmelbourne-21-mask.png",
  "northmelbourne-22-mask.png",
  "northmelbourne-24-mask.png",
  "northmelbourne-25-mask.png",
  "northmelbourne-26-mask.png",
  "northmelbourne-27-mask.png",
  "northmelbourne-28-mask.png",
  "northmelbourne-29-mask.png",
  "northmelbourne-30-mask.png",
  "northmelbourne-31-mask.png",
  "northmelbourne-32-mask.png",
  "northmelbourne-33-mask.png",
  "northmelbourne-34-mask.png",
  "northmelbourne-35-mask.png",
  "northmelbourne-36-mask.png",
  "northmelbourne-37-mask.png",
  "northmelbourne-38-mask.png",
  "northmelbourne-39-mask.png",
  "northmelbourne-40-mask.png",
  "northmelbourne-41-mask.png",
  "northmelbourne-42-mask.png",
  "northmelbourne-44-mask.png",
  "northmelbourne-45-mask.png",
  "northmelbourne-46-mask.png",
  "portadelaide-01-mask.png",
  "portadelaide-02-mask.png",
  "portadelaide-03-mask.png",
  "portadelaide-04-mask.png",
  "portadelaide-05-mask.png",
  "portadelaide-06-mask.png",
  "portadelaide-07-mask.png",
  "portadelaide-08-mask.png",
  "portadelaide-09-mask.png",
  "portadelaide-10-mask.png",
  "portadelaide-11-mask.png",
  "portadelaide-12-mask.png",
  "portadelaide-13-mask.png",
  "portadelaide-14-mask.png",
  "portadelaide-15-mask.png",
  "portadelaide-16-mask.png",
  "portadelaide-17-mask.png",
  "portadelaide-18-mask.png",
  "portadelaide-19-mask.png",
  "portadelaide-21-mask.png",
  "portadelaide-22-mask.png",
  "portadelaide-23-mask.png",
  "portadelaide-24-mask.png",
  "portadelaide-25-mask.png",
  "portadelaide-26-mask.png",
  "portadelaide-27-mask.png",
  "portadelaide-28-mask.png",
  "portadelaide-29-mask.png",
  "portadelaide-30-mask.png",
  "portadelaide-31-mask.png",
  "portadelaide-32-mask.png",
  "portadelaide-33-mask.png",
  "portadelaide-34-mask.png",
  "portadelaide-36-mask.png",
  "portadelaide-37-mask.png",
  "portadelaide-38-mask.png",
  "portadelaide-39-mask.png",
  "portadelaide-40-mask.png",
  "portadelaide-41-mask.png",
  "portadelaide-42-mask.png",
  "portadelaide-44-mask.png",
  "portadelaide-45-mask.png",
  "richmond-01-mask.png",
  "richmond-02-mask.png",
  "richmond-03-mask.png",
  "richmond-04-mask.png",
  "richmond-05-mask.png",
  "richmond-07-mask.png",
  "richmond-10-mask.png",
  "richmond-13-mask.png",
  "richmond-14-mask.png",
  "richmond-15-mask.png",
  "richmond-17-mask.png",
  "richmond-18-mask.png",
  "richmond-19-mask.png",
  "richmond-20-mask.png",
  "richmond-21-mask.png",
  "richmond-22-mask.png",
  "richmond-23-mask.png",
  "richmond-24-mask.png",
  "richmond-25-mask.png",
  "richmond-26-mask.png",
  "richmond-27-mask.png",
  "richmond-28-mask.png",
  "richmond-29-mask.png",
  "richmond-30-mask.png",
  "richmond-31-mask.png",
  "richmond-32-mask.png",
  "richmond-33-mask.png",
  "richmond-34-mask.png",
  "richmond-35-mask.png",
  "richmond-36-mask.png",
  "richmond-37-mask.png",
  "richmond-38-mask.png",
  "richmond-39-mask.png",
  "richmond-40-mask.png",
  "richmond-41-mask.png",
  "richmond-42-mask.png",
  "richmond-43-mask.png",
  "richmond-44-mask.png",
  "richmond-45-mask.png",
  "richmond-46-mask.png",
  "richmond-47-mask.png",
  "richmond-48-mask.png",
  "richmond-49-mask.png",
  "richmond-50-mask.png",
  "stkilda-01-mask.png",
  "stkilda-02-mask.png",
  "stkilda-03-mask.png",
  "stkilda-04-mask.png",
  "stkilda-05-mask.png",
  "stkilda-06-mask.png",
  "stkilda-07-mask.png",
  "stkilda-08-mask.png",
  "stkilda-09-mask.png",
  "stkilda-10-mask.png",
  "stkilda-11-mask.png",
  "stkilda-12-mask.png",
  "stkilda-13-mask.png",
  "stkilda-14-mask.png",
  "stkilda-15-mask.png",
  "stkilda-16-mask.png",
  "stkilda-17-mask.png",
  "stkilda-18-mask.png",
  "stkilda-19-mask.png",
  "stkilda-20-mask.png",
  "stkilda-21-mask.png",
  "stkilda-22-mask.png",
  "stkilda-23-mask.png",
  "stkilda-24-mask.png",
  "stkilda-25-mask.png",
  "stkilda-26-mask.png",
  "stkilda-27-mask.png",
  "stkilda-28-mask.png",
  "stkilda-29-mask.png",
  "stkilda-30-mask.png",
  "stkilda-31-mask.png",
  "stkilda-32-mask.png",
  "stkilda-33-mask.png",
  "stkilda-34-mask.png",
  "stkilda-35-mask.png",
  "stkilda-36-mask.png",
  "stkilda-38-mask.png",
  "stkilda-39-mask.png",
  "stkilda-41-mask.png",
  "stkilda-42-mask.png",
  "stkilda-43-mask.png",
  "stkilda-44-mask.png",
  "stkilda-45-mask.png",
  "stkilda-47-mask.png",
  "sydney-01-mask.png",
  "sydney-02-mask.png",
  "sydney-03-mask.png",
  "sydney-04-mask.png",
  "sydney-05-mask.png",
  "sydney-06-mask.png",
  "sydney-07-mask.png",
  "sydney-08-mask.png",
  "sydney-09-mask.png",
  "sydney-10-mask.png",
  "sydney-11-mask.png",
  "sydney-12-mask.png",
  "sydney-13-mask.png",
  "sydney-14-mask.png",
  "sydney-15-mask.png",
  "sydney-16-mask.png",
  "sydney-17-mask.png",
  "sydney-18-mask.png",
  "sydney-19-mask.png",
  "sydney-20-mask.png",
  "sydney-21-mask.png",
  "sydney-22-mask.png",
  "sydney-24-mask.png",
  "sydney-25-mask.png",
  "sydney-26-mask.png",
  "sydney-27-mask.png",
  "sydney-28-mask.png",
  "sydney-29-mask.png",
  "sydney-30-mask.png",
  "sydney-31-mask.png",
  "sydney-32-mask.png",
  "sydney-33-mask.png",
  "sydney-34-mask.png",
  "sydney-35-mask.png",
  "sydney-36-mask.png",
  "sydney-37-mask.png",
  "sydney-38-mask.png",
  "sydney-39-mask.png",
  "sydney-41-mask.png",
  "sydney-42-mask.png",
  "sydney-43-mask.png",
  "sydney-44-mask.png",
  "sydney-45-mask.png",
  "sydney-46-mask.png",
  "westcoast-01-mask.png",
  "westcoast-02-mask.png",
  "westcoast-03-mask.png",
  "westcoast-04-mask.png",
  "westcoast-05-mask.png",
  "westcoast-06-mask.png",
  "westcoast-07-mask.png",
  "westcoast-08-mask.png",
  "westcoast-09-mask.png",
  "westcoast-10-mask.png",
  "westcoast-11-mask.png",
  "westcoast-12-mask.png",
  "westcoast-13-mask.png",
  "westcoast-14-mask.png",
  "westcoast-15-mask.png",
  "westcoast-16-mask.png",
  "westcoast-18-mask.png",
  "westcoast-19-mask.png",
  "westcoast-20-mask.png",
  "westcoast-21-mask.png",
  "westcoast-22-mask.png",
  "westcoast-23-mask.png",
  "westcoast-24-mask.png",
  "westcoast-25-mask.png",
  "westcoast-26-mask.png",
  "westcoast-27-mask.png",
  "westcoast-28-mask.png",
  "westcoast-29-mask.png",
  "westcoast-30-mask.png",
  "westcoast-31-mask.png",
  "westcoast-32-mask.png",
  "westcoast-33-mask.png",
  "westcoast-34-mask.png",
  "westcoast-35-mask.png",
  "westcoast-36-mask.png",
  "westcoast-37-mask.png",
  "westcoast-38-mask.png",
  "westcoast-39-mask.png",
  "westcoast-40-mask.png",
  "westcoast-41-mask.png",
  "westcoast-42-mask.png",
  "westcoast-43-mask.png",
  "westcoast-45-mask.png",
  "westcoast-49-mask.png",
];

const IMAGE_SIZE = 544;
const COLS = 29;
const ROWS = 28;
const IMAGE_AMOUNT = 788;

function setup(loader, resources) {
  // This function will run after the sprite sheet is loaded
  const spriteSheet = resources.spritesheet.texture;
  console.log(spriteSheet);
  // createSprites(spriteSheet);
}

// export const initSketch = async (mountEl) => {
//   // Create a PixiJS application.
//   const app = new Application();

//   // Intialize the application.
//   await app.init({ background: "#1099bb", resizeTo: window });

//   mountEl.appendChild(app.canvas);

//   const sheet = await Assets.load("./composite-large.png");

//   console.log(sheet);
//   const textures = [];

//   for (let i = 0; i < COLS * ROWS; i++) {
//     const x = IMAGE_SIZE * (i % COLS);
//     const y = IMAGE_SIZE * Math.floor(i / COLS);
//     const rectangle = new Rectangle(x, y, IMAGE_SIZE, IMAGE_SIZE);
//     const texture = new Texture({
//       source: sheet.baseTexture,
//       frame: rectangle,
//     });
//     textures.push({ texture });
//   }

//   console.log(textures);

//   //   const frames = {};
//   //   IMAGE_NAMES.forEach((name, i) => {
//   //     frames[`mask-${i}`] = {
//   //       x: IMAGE_SIZE * (i % COLS),
//   //       y: IMAGE_SIZE * Math.floor(i / COLS),
//   //       width: 544,
//   //       height: 544,
//   //     };
//   //   });

//   //   const atlasData = {
//   //     frames,
//   //     meta: {
//   //       image: "./composite-large.png",
//   //       format: "RGBA8888",
//   //       size: { w: 15776, h: 15776 },
//   //       scale: 1,
//   //     },
//   //   };

//   //   const spritesheet = new Spritesheet(
//   //     Texture.from(atlasData.meta.image),
//   //     atlasData
//   //   );

//   //   await spritesheet.parse();

//   //   console.log(spritesheet);

//   //   const textures = [];
//   //   for (let i = 0; i < IMAGE_NAMES.length; i++) {
//   //     textures.push(await Assets.load(`./output/${IMAGE_NAMES[i]}`));
//   //   }

//   const sprites = new Container();

//   app.stage.addChild(sprites);

//   // Create an array to store all the sprites
//   const maggots = [];

//   const totalSprites = textures.length;

//   for (let i = 0; i < totalSprites; i++) {
//     // Create a new maggot Sprite
//     const dude = new Sprite(textures[i]);

//     // Set the anchor point so the texture is centerd on the sprite
//     dude.anchor.set(0.5);

//     // Different maggots, different sizes
//     dude.scale.set(0.3);

//     // Scatter them all
//     dude.x = Math.random() * app.screen.width;
//     dude.y = Math.random() * app.screen.height;

//     dude.tint = Math.random() * 0x808080;

//     // Create a random direction in radians
//     dude.direction = Math.random() * Math.PI * 2;

//     // This number will be used to modify the direction of the sprite over time
//     dude.turningSpeed = Math.random() - 0.8;

//     // Create a random speed between 0 - 2, and these maggots are slooww
//     dude.speed = (2 + Math.random() * 2) * 0.2;

//     dude.offset = Math.random() * 100;

//     // Finally we push the dude into the maggots array so it it can be easily accessed later
//     maggots.push(dude);

//     sprites.addChild(dude);
//   }

//   // Create a bounding box box for the little maggots
//   const dudeBoundsPadding = 100;
//   const dudeBounds = new Rectangle(
//     -dudeBoundsPadding,
//     -dudeBoundsPadding,
//     app.screen.width + dudeBoundsPadding * 2,
//     app.screen.height + dudeBoundsPadding * 2
//   );

//   let tick = 0;

//   app.ticker.add(() => {
//     // Iterate through the sprites and update their position
//     for (let i = 0; i < maggots.length; i++) {
//       const dude = maggots[i];

//       dude.direction += dude.turningSpeed * 0.01;
//       dude.x += Math.sin(dude.direction) * (dude.speed * dude.scale.y);
//       dude.y += Math.cos(dude.direction) * (dude.speed * dude.scale.y);
//     }

//     // Increment the ticker
//     tick += 0.1;
//   });
// };
