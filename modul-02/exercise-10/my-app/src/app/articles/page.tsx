import React from 'react';
import Header from '../header/page';
import Image from 'next/image';
import Footer from '../footer/page';

function Articles() {
  return (
    <>
      <Header />
      <div className='flex flex-col min-w-md items-center justify-center mt-10 '>
        <Image
          src='/article.svg'
          alt='Article Image'
          width={973}
          height={381}
        />
      </div>
      <div className='flex flex-col px-72 gap-4 mt-10 mb-20'>
        <h1 className='font-bold text-5xl'>Finibus Bonorum et Malorum</h1>
        <div className='flex gap-5 border-b-1 border-gray-300 pb-7'>
          <h6 className='font-bold text-lg'>Written by John Doe</h6>
          <h6 className='font-normal text-lg text-gray-600'>Monday May 20</h6>
        </div>
        <article className='space-y-6'>
          <p className='text-base text-justify leading-5 pt-2 text-gray-600'>
            Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
            written by Cicero in 45 BC &quot;Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur, vel illum qui
            dolorem eum fugiat quo voluptas nulla pariatur?&quot;
            <br />
            <br />
            1914 translation by H. Rackham &quot;But I must explain to you how
            all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?&quot;
            <br />
            <br />
            <span className=' italic font-bold text-base text-justify leading-8 pt-2 text-gray-600'>
              Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
            </span>
            <br />
            <br />
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.&quot;
            <br />
            <br />
            <span className='font-bold text-3xl'>Section</span>
            <br />
            <br />
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.&quot;
            <br />
            <br />
            <span className='font-bold text-3xl'>Section 1.10.33</span>
            <br />
            <br />
            &quot;At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.&quot;
            Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;,
            written by Cicero in 45 BC &quot;At vero eos et accusamus et iusto
            odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat.&quot;
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}

export default Articles;
