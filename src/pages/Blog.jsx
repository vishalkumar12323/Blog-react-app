import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import htmlParser from "html-react-parser";

const Blog = () => {
  return (
    <>
      <div className="card w-[85%] max-w-[90%] mx-auto h-auto bg-white text-black dark:bg-slate-800 dark:text-white m-4 rounded-md shadow-md border border-green-500/75">
        <div className="card-body px-4 py-3">
          <h3 className="text-6xl text-start">
            how to create a zambo-card using React-Component-Library
          </h3>
        </div>
        <div className="p-2 w-full">
          <img
            src="./Udemy-certificate.jpg"
            alt="jpg image"
            className="w-full h-auto rounded"
          />
        </div>
        <div className="content py-3 px-4">
          <p className="text-gray-600 dark:text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            doloremque quaerat molestias totam corporis quae doloribus
            laudantium minus cum voluptatum amet recusandae quia, dicta
            voluptate alias quos dolores mollitia qui. Obcaecati blanditiis
            voluptas reprehenderit ex! Incidunt, repellendus, veniam fugit
            quidem ratione fuga laudantium in facere aut earum vero quod
            accusantium consequatur. Quas nobis dolor quaerat perferendis magni
            aliquam facere inventore. Deserunt, velit! Ad, placeat voluptate sed
            nulla rem fugit. Enim atque a odio odit modi nulla, debitis
            provident totam iste, dignissimos doloremque magnam dolorem dicta
            cum itaque quae! Rerum, repellat. Repellat autem provident deserunt
            officiis non assumenda velit nobis, id aspernatur, doloremque
            placeat et possimus exercitationem adipisci consequuntur aliquam at
            minus nesciunt laborum sed fugit voluptate maxime, rem ut. Fuga!
            Possimus eos corrupti iste, voluptatem commodi rerum officiis
            deleniti laboriosam numquam, voluptates quaerat incidunt dignissimos
            cupiditate voluptas neque facilis ipsum aspernatur pariatur dolorum
            veritatis. Dolorum suscipit error corporis aliquid distinctio.
            Quaerat laboriosam non adipisci modi, expedita corporis aliquam id
            dolore cupiditate voluptatum sint voluptates nam hic exercitationem
            necessitatibus numquam? Sint veritatis eum sit at rerum, natus
            voluptatem repellendus! Doloremque, sunt. Dignissimos saepe qui
            optio deserunt minus quisquam esse officia similique maxime labore
            ex praesentium, repellendus ipsum cum atque. Commodi consectetur
            optio earum quae voluptatibus reprehenderit blanditiis non
            architecto ratione molestiae. Amet, non quod! Animi ratione natus
            placeat ipsam aliquid. Maiores nostrum aliquid suscipit est eos
            voluptatem! Pariatur dicta nisi magni neque aspernatur delectus
            aliquam optio animi commodi. Consequatur, velit laborum. Porro eum
            quasi dolorum accusamus inventore necessitatibus iste facilis
            mollitia distinctio earum, fugit, expedita minus, libero
            praesentium! Labore, corrupti similique! Eos, sapiente rerum ad
            ducimus perferendis et quas architecto inventore. Quibusdam beatae
            deserunt libero quae dolore neque provident maiores magni autem
            laboriosam explicabo placeat, sapiente ad cumque officiis officia
            qui repellat consectetur est animi, facilis omnis? Voluptates magnam
            aperiam nulla! Ad quo laborum, obcaecati optio eligendi enim animi
            facere ratione libero numquam dicta asperiores perspiciatis
            assumenda, nemo sequi, aspernatur labore nobis blanditiis! Iste
            doloremque repellat amet corporis quibusdam necessitatibus magnam!
            Voluptatibus, deleniti, voluptatem vitae natus distinctio placeat
            rem veritatis autem necessitatibus ducimus dolore magni minus
            pariatur molestias, modi aut sequi sint suscipit libero odio. Sequi
            eum magni reprehenderit hic explicabo? Non accusamus reprehenderit
            officia, rem vel animi, sed corrupti odio voluptatibus obcaecati
            cumque doloremque possimus culpa porro vitae enim accusantium autem,
            aut hic amet! Culpa consequatur sapiente beatae mollitia architecto!
            Obcaecati dolores quos animi est sint illum officia itaque minus,
            dicta voluptatibus eaque non temporibus enim magnam repellat debitis
            aperiam quidem odit voluptas, eum suscipit! Voluptatibus
            necessitatibus magni asperiores quae. Amet impedit iure a sequi
            pariatur. Nihil expedita a sequi quisquam officiis, nemo non ipsum
            qui id maxime accusamus doloremque cumque iure eum ipsam porro
            voluptas itaque veniam perferendis sapiente! Quisquam aliquam quos
            beatae reprehenderit optio neque nobis dolorum. Veritatis a, numquam
            cum provident illo soluta excepturi aperiam expedita voluptate
            quisquam laudantium maxime ducimus, veniam optio porro nam vel
            consectetur! Modi eius quis nobis minus, corporis atque ratione
            nihil obcaecati odio repudiandae, fuga quisquam quidem? Qui
            explicabo odio modi mollitia tempore minima ab blanditiis commodi,
            enim, minus sunt itaque voluptas. Ipsa ullam ipsum sequi ea incidunt
            laborum, voluptatum odio quod assumenda. Assumenda enim, ab,
            obcaecati excepturi adipisci nobis eius voluptatem alias non nisi
          </p>
        </div>
        <div className="px-4 py-2">
          <p className="text-[16px] capitalize">
            publiced by:{" "}
            <span className="capitalize text-[15px] text-green-500">
              adam bob
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;
