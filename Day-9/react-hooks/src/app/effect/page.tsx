"use client";

import { ChangeEvent, useEffect, useState } from "react";

function EffectPage() {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    console.log("Effect trigger: ", value);
    // Depedency
  }, [value]);

  useEffect(() => {
    //

    return () => {};
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-40">
      <input
        type="text"
        placeholder="Input your name"
        onChange={handleChange}
        className="border-blue-400 border p-3 rounded-md min-w-md"
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi in
        quasi, recusandae provident quisquam voluptatibus maxime eaque voluptas
        labore fugit consequatur deleniti nemo exercitationem accusantium sed
        quam! Nobis doloremque pariatur vel iure consequuntur accusamus vitae
        nostrum, eum quia sint dolores saepe aliquid quam, quibusdam voluptatem
        aperiam est! Ullam corrupti commodi voluptas incidunt voluptatum, ex
        dolore dignissimos molestiae ut facere nostrum libero odio neque sit,
        porro voluptatibus, praesentium illum voluptates sequi eaque soluta? Ea,
        quos amet aut nam cumque dolore minima architecto facilis sapiente
        voluptates tempore, vitae iste tempora necessitatibus quidem facere eum
        quam fugit esse. Quos quasi quae debitis laboriosam, minima deleniti.
        Cum, ex? Aperiam hic, adipisci ipsam corrupti, quam ratione aliquid
        atque nostrum ducimus delectus laboriosam tempora non sint! Dolores
        fugit magnam nam autem, a quos officia aut veritatis commodi hic quaerat
        qui cupiditate, eos fuga itaque corporis ex error modi sit. Error
        suscipit sit, hic necessitatibus sunt esse sequi corporis! Ducimus
        facere cupiditate harum! Eum facilis repellendus minus illum obcaecati
        sequi doloremque animi pariatur expedita amet, nam sit dignissimos
        nesciunt accusantium officia tempora sunt at omnis reiciendis velit
        numquam atque provident ex voluptatibus. Labore quod voluptate optio
        quidem ullam? Saepe cumque assumenda architecto quasi iste, laborum
        provident, cum asperiores suscipit nihil delectus, temporibus reiciendis
        unde totam a voluptatibus consequuntur reprehenderit enim deserunt eum.
        In illum voluptatibus unde maxime distinctio consequuntur corrupti
        perspiciatis porro nisi nam fugit vero ducimus ipsam officia sit, non
        atque nobis delectus sapiente aut tempora cumque esse architecto. Ab
        quisquam porro nemo rem quam tenetur aspernatur! Soluta totam eligendi
        at voluptatibus error blanditiis non saepe deserunt, eos earum veniam
        neque, ipsam sed labore voluptatem harum adipisci, distinctio cumque
        reiciendis. Cum deleniti consectetur, voluptatum consequuntur laboriosam
        et in amet rem exercitationem, temporibus reiciendis ipsa distinctio
        officiis asperiores provident quibusdam ipsam excepturi alias quam
        explicabo possimus veritatis. Optio saepe doloribus et tenetur.
        Blanditiis, quo neque possimus dignissimos illum aut? Ab, sapiente autem
        totam ratione sit hic explicabo ea ipsam laudantium quas, velit esse
        temporibus accusantium corporis, dolore optio a. Neque provident
        assumenda ipsum labore aut. Harum corporis ratione sequi pariatur. Quod
        aspernatur odio, eius nesciunt commodi ipsam fugit repellat molestias
        inventore beatae. Natus quos reiciendis, harum beatae assumenda magnam
        similique dignissimos ea adipisci sapiente? Quaerat fuga eligendi, fugit
        labore minus harum quis mollitia dignissimos voluptates rerum aperiam
        beatae ea exercitationem odit corporis. Perspiciatis, aut, illo neque
        quisquam ullam nulla enim quasi veniam modi facere, atque eum ad.
        Doloribus, quidem vero! Odio beatae totam non quibusdam animi in
        provident odit est ex quasi enim placeat omnis illo laudantium excepturi
        dolorem consectetur asperiores tempora, aliquam perferendis incidunt.
        Beatae, vel aspernatur illo nemo eum eligendi accusamus cupiditate
        distinctio itaque tempora saepe, dolorem voluptas commodi animi delectus
        ad ipsam? Qui, quasi omnis, culpa sit, facilis rerum assumenda suscipit
        excepturi similique architecto eaque magnam adipisci. Culpa, debitis
        veritatis deleniti eum repellendus officiis asperiores blanditiis atque
        aut optio ea nobis similique, minima porro molestiae magnam labore,
        eaque harum alias voluptate deserunt doloremque consectetur. Facilis
        quidem accusamus impedit fugiat eligendi natus. Necessitatibus
        temporibus, aliquid officiis adipisci facere, repudiandae beatae fugit
        tempora quae velit hic error. Unde corrupti voluptate sequi neque alias
        praesentium dolores sint! Cum accusamus dolor cumque provident sit atque
        nobis itaque maiores ipsam officia. Hic nostrum deleniti ullam sunt fuga
        cupiditate? Velit dolorum aliquid obcaecati mollitia culpa cumque iusto,
        nam perferendis! Tempore, corrupti neque. Quam sequi facere vero
        reiciendis vitae? Harum quo quia illum natus fuga! Dicta, totam
        blanditiis reprehenderit commodi, nostrum aspernatur excepturi, nesciunt
        consequatur obcaecati quibusdam doloremque qui. Iusto ex commodi id
        provident illo quae ipsam ipsa tempore quos? Ipsum quia officiis illo
        ut, repellat quod facilis labore nihil explicabo quo autem sed sequi nam
        rem! Ex facere rerum laudantium placeat debitis iure corporis dolores
        earum incidunt, iusto unde tempore. Nostrum, corporis in, assumenda illo
        corrupti recusandae ea quo magnam inventore sunt exercitationem nisi
        dolore non molestiae magni odio quas aut! Maxime alias iste tempora,
        ipsam quo earum maiores atque quam error! Reiciendis, repudiandae totam!
        Consectetur exercitationem repellendus id ex, sapiente sequi perferendis
        quam unde sunt blanditiis nisi ipsam cupiditate ad. Cumque accusantium
        sint quia totam voluptatum consequuntur dolorem consequatur provident
        molestiae eius impedit maiores, repellendus a saepe nobis corrupti.
        Ipsum consequatur assumenda velit accusamus quos voluptates aut
        provident, expedita iste, esse distinctio modi minus? Dolorum harum
        possimus delectus modi ut aut? Voluptatem totam tempore dolor similique
        sed accusamus molestiae eius porro maiores illo quidem ab, vel facilis
        hic aut deserunt id possimus numquam quia quis voluptas. Est excepturi
        beatae veritatis! Facere adipisci, modi exercitationem maxime id tempore
        dolor ipsum est eius velit. Voluptatem ducimus totam libero eveniet
        consectetur numquam esse repellendus quidem nihil maxime. Obcaecati
        beatae corporis quod suscipit quidem sequi exercitationem libero
        repellendus asperiores esse nam hic cum architecto consequuntur,
        accusantium expedita voluptatem veniam molestias blanditiis labore
        eligendi vitae. Corporis, illo unde. Nihil, iusto velit unde placeat nam
        optio sapiente exercitationem at ut expedita? Qui id hic, ducimus
        assumenda impedit, repellendus eveniet natus harum alias tenetur
        dignissimos repudiandae, eligendi distinctio excepturi officia deserunt
        facere voluptate totam eius pariatur praesentium obcaecati porro? Magnam
        enim doloribus nihil assumenda repellat debitis aut similique ducimus
        officia corporis, quas ut autem deleniti sint voluptate sapiente saepe.
        Ullam, magnam. Perspiciatis, blanditiis debitis quos officiis,
        reprehenderit, nisi modi perferendis aut quis neque architecto natus
        adipisci repellendus maxime quo repudiandae autem sit consequatur.
        Repellat officia incidunt cupiditate non quae iure minima repellendus
        eveniet! Earum deleniti, voluptatum ex vitae, magni qui atque tenetur
        aut ducimus nostrum eos cupiditate placeat sint natus esse quam et
        laudantium unde quia amet quisquam impedit distinctio, reiciendis
        molestias. Eligendi optio debitis quae nostrum id autem quas eius sunt
        illo voluptates facere obcaecati esse pariatur modi facilis vitae
        reiciendis, laboriosam dicta, ex iste dignissimos veritatis. Accusamus
        eveniet inventore dolor maxime nisi, earum culpa, pariatur ea fugit
        expedita cum iusto at commodi similique voluptatem? Deserunt accusamus
        perferendis velit, deleniti cumque vel, quo nihil soluta officia neque
        veritatis natus pariatur, possimus fugiat? Nihil mollitia consectetur
        eum ab atque quod totam recusandae, libero nisi reprehenderit
        accusantium dignissimos minima debitis ut maiores facere, consequatur,
        aut tenetur voluptatem?
      </p>
    </div>
  );
}

export default EffectPage;
