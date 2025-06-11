import { useRef, useEffect } from 'react';
import { useOnMountUnsafe } from 'Hooks/useOnMountUnsafe';
import collisions from 'Assets/game-assets/hometown/collisions.js';

const Hometown = () => {
  const canvasRef = useRef(null);

  useOnMountUnsafe(() => {

    // CLASSES DECLARATION 
    class Sprite {
      constructor({ position, velocity, image, frames = { max: 1 } }) {
        this.position = position
        this.image = image
        this.frames = frames
        this.image.onload = () => {
          this.width = this.image.width / this.frames.max;
          this.height = this.image.height;
        }
      }
      draw() {
        ctx.drawImage(
          this.image,
          0,
          0,
          this.image.width / this.frames.max,
          this.image.height,
          this.position.x,
          this.position.y,
          this.image.width / this.frames.max,
          this.image.height,
        );
      }
    }

    class Boundary {
      static width = 32;
      static height = 32;
      constructor({ position }) {
        this.position = position;
        this.width = 27;
        this.height = 27;
      }
      draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
      }
    }

    // END OF CLASSES DECLARATION 



    const canvas = canvasRef.current;
    canvas.width = 1024;
    canvas.height = 776;
    canvas.style.background = 'black';
    canvas.style.imageRendering = 'pixelated';
    canvas.style.mozImageRendering = 'pixelated';
    canvas.style.webkitImageRendering = 'pixelated';
    

    const ctx = canvas.getContext('2d');

    const collisionsMap = [];
    for (let i = 0; i < collisions.length; i += 100) {
      collisionsMap.push(collisions.slice(i, 100 + i))
    }

    const offset = {
      x: -1298,
      y: -690
    }

    const boundaries = [];

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 79733) {
          boundaries.push(
            new Boundary({
              position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
              }
            })
          );
        }
      });
    });

    const map = new Image();
    const hero = new Image();
    const foreground = new Image();
    map.src = '/game-assets/hometown/hometown-map.png';
    hero.src = '/game-assets/hero/HeroDown.png';
    foreground.src = '/game-assets/hometown/hometown-map-foreground.png';



    const player = new Sprite({
      position: {
        x: canvas.width / 2 - hero.width / 4 / 2,
        y: canvas.height / 2 - hero.height / 2,
      },
      image: hero,
      frames: {
        max: 4
      }
    })

    const background = new Sprite({
      position: {
        x: offset.x,
        y: offset.y
      },
      image: map
    })

    const foregroundMap = new Sprite({
      position: {
        x: offset.x,
        y: offset.y
      },
      image: foreground
    })

    const keys = {
      w: {
        pressed: false
      },
      a: {
        pressed: false
      },
      s: {
        pressed: false
      },
      d: {
        pressed: false
      }
    }

    const movables = [background, ...boundaries, foregroundMap]

    function rectangularCollision({ rectangle1, rectangle2 }) {
      return (
        rectangle1.position.x + rectangle1.width - 3 >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width - 3 &&
        rectangle1.position.y + rectangle1.height - 3 >= rectangle2.position.y &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height - 3
      )
    }

    function animate() {
      window.requestAnimationFrame(animate);
      background.draw();
      boundaries.forEach(boundary => {
        boundary.draw();
      });
      player.draw();
      foregroundMap.draw();




      if (keys.w.pressed && lastKey === "w") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y + 1
                }
              }
            })
          ) {
            return;
          }
        }
        movables.forEach(movable => movable.position.y += 1)
      }
      else if (keys.s.pressed && lastKey === "s") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y - 1
                }
              }
            })
          ) {
            return;
          }
        }
        movables.forEach(movable => movable.position.y -= 1)
      }
      else if (keys.a.pressed && lastKey === "a") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x + 1,
                  y: boundary.position.y
                }
              }
            })
          ) {
            return;
          }
        }
        movables.forEach(movable => movable.position.x += 1)
      }
      else if (keys.d.pressed && lastKey === "d") {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                ...boundary,
                position: {
                  x: boundary.position.x - 1,
                  y: boundary.position.y
                }
              }
            })
          ) {
            return;
          }
        }
        movables.forEach(movable => movable.position.x -= 1)
      }
    }

    animate();
    let lastKey = '';

    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'w':
          keys.w.pressed = true;
          lastKey = 'w';
          break;
        case 's':
          keys.s.pressed = true;
          lastKey = 's';
          break;
        case 'a':
          keys.a.pressed = true;
          lastKey = 'a';
          break;
        case 'd':
          keys.d.pressed = true;
          lastKey = 'd';
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'w':
          keys.w.pressed = false;
          break;
        case 's':
          keys.s.pressed = false;
          break;
        case 'a':
          keys.a.pressed = false;
          break;
        case 'd':
          keys.d.pressed = false;
          break;
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
      <canvas className="w-full" ref={canvasRef}></canvas>
    </div>
  )
}

export default Hometown