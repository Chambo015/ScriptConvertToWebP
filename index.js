import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';        // JPEG images

    imagemin(['img/*'], {
        destination: 'compressed_images',
        plugins: [imageminWebp({quality: 90})]
      }).then(() => {
        console.log('Done!');
      });