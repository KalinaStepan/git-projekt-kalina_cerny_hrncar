        function vypocet()
        {
         
            r=formular.r.value
         delka=2*Math.PI*r
         obsah=Math.PI*r*r
         objem=4/3*Math.PI*r*r*r
         povrch=4*Math.PI*r*r
         formular.delka.value=delka
         formular.obsah.value=obsah
         formular.objem.value=objem
         formular.povrch.value=povrch
        }