export class DataTables {

    static parseTable(header: string, data: string): Record<string, string>[] {
        let out: Record<string, string>[] = [];
        let columnHeadings = header.split("\t");
        let rows = data.split(/\r?\n/)
        for (let r = 0; r < rows.length; r++) {
            let columns = rows[r]?.split("\t");
            if (!columns) continue;

            let outrow: Record<string, string> = {};
            for (let c = 0; c < columns.length && c < columnHeadings.length; c++) {
                let heading = columnHeadings[c] ?? "Null";
                outrow[heading] = columns[c] ?? "Null"
            }
            out.push(outrow);
        }
        return out;
    }

    static parseRows(data: string): string[][] {
        let out: string[][] = [];
        let rows = data.split(/\r?\n/);
        for (let r = 0; r < rows.length; r++) {
            let columns = rows[r]?.split("\t");
            if (!columns) continue;
            out.push(columns);
        }
        return out;
    }

    static readonly imageDataHeader = "Filename	Width	Height";
    static readonly imageData = `2014-lwl-lecture-poster.jpg	2600	2600
a-country-inn-hogarth-between-1747-1800.jpg	6877	4452
a-fashionable-marriage-castrato-krytyk-1-hi.jpg	2500	1859
a-fashionable-marriage-castrato-krytyk-2-hi.jpg	2500	1868
a-fashionable-marriage-castrato-krytyk-3-hi.jpg	2500	1868
a-fashionable-marriage-castrato-krytyk-4-hi.jpg	2500	1868
a-fashionable-marriage-lot-100-1-hi.jpg	1856	2500
a-fashionable-marriage-lot-100-2-hi.jpg	1859	2500
a-fashionable-marriage-lot-100-3-hi.jpg	1865	2500
a-fashionable-marriage-lot-100-4-hi.jpg	1850	2500
a-harlot-s-progress-loose-grip-1-hi.jpg	1872	2500
a-harlot-s-progress-loose-grip-2-hi.jpg	1858	2500
a-harlot-s-progress-loose-grip-3-hi.jpg	1856	2500
a-harlot-s-progress-loose-grip-4-hi.jpg	1860	2500
a-harlot-s-progress-tight-grip-1-hi.jpg	1863	2500
a-harlot-s-progress-tight-grip-2-hi.jpg	1862	2500
a-harlot-s-progress-tight-grip-3-hi.jpg	1859	2500
a-harlot-s-progress-tight-grip-4-hi.jpg	1856	2500
a-midnight-modern-conversation-reipenhausen-not-before-1786.jpg	3251	4568
a-midnight-modern-conversation-state-3-hogarth-hogarth-march-1732.jpg	6302	4956
a-new-book-of-small-figures-from-hogarth-hogarth-laurie-whittle-12-may-1794.jpg	2063	1814
a-rake-s-progress-bottoms-up-1-hi.jpg	1868	2500
a-rake-s-progress-bottoms-up-2-hi.jpg	1862	2500
a-rake-s-progress-bottoms-up-3-hi.jpg	1860	2500
a-rake-s-progress-bottoms-up-4-hi.jpg	1873	2500
a-rake-s-progress-hole-in-her-stocking-1-hi.jpg	2000	1494
a-rake-s-progress-hole-in-her-stocking-2-hi.jpg	2500	1872
a-rake-s-progress-hole-in-her-stocking-3-hi.jpg	2500	1867
a-rake-s-progress-hole-in-her-stocking-4-hi.jpg	2500	1852
a-rakes-progress-plate-3-hogarth-hogarth-24-june-1735.jpg	5605	4989
a-rakes-progress-plate-6-hogarth-hogarth-june-25-1735.jpg	6745	5140
a-satire-on-hogarth-and-the-rev-c-churchill-1763.jpg	1561	1296
alamy-umm-al-quwain-stamp-of-hogarth.jpg	3175	3950
an-answer-john-wilkes-1763.jpg	2097	3224
apologies-to-hogarth-detail-rockman-2022.jpg	4919	6846
battle-of-the-pictures-barlow-boydell-1791.jpg	6080	5182
battle-of-the-pictures-cook-stockdale-1806.jpg	4159	3633
battle-of-the-pictures-unknown-simpkin-1880.jpg	6192	5088
bell-the-death-of-boris-yeltsin.jpg	6574	4835
bold-and-enterprising-lads-hogarth-not-before-1749.jpg	1565	2253
bold-and-enterprising-lads-hogarth-r-shaw-not-before-1749.jpg	1480	2143
boris-johnson-williams-2021.jpg	5099	6598
bruiser-clerk-scholey-1810.jpg	4946	6846
bruiser-cook-longman-1807.jpg	5163	6341
bruiser-dent-boydell-1791.jpg	5126	6774
bruiser-heath-restored-by-baldwin-and-cradock-1835.jpg	4683	6060
bruiser-mills-jones-co-1833.jpg	5140	6874
bruiser-mills-london-printing-and-publishing-1860s.jpg	5102	6651
bruiser-unknown-oliphant-anderson-ferrier-1883.jpg	4847	6280
bruiser-unknown-simpkin-1880.jpg	4970	6230
comic-muse-clerk-scholey-1810.jpg	5089	6776
comic-muse-copper-plate-detail-both-lights-1-0.jpg	7216	5412
comic-muse-copper-plate-detail-corner-light-0-0.jpg	7216	5412
comic-muse-copper-plate-detail-corner-light-0-5.jpg	7216	5412
comic-muse-copper-plate-detail-corner-light-1-0.jpg	7216	5412
comic-muse-copper-plate-detail-door-light-0-0.jpg	7216	5412
comic-muse-copper-plate-detail-door-light-0-5.jpg	7216	5412
comic-muse-copper-plate-detail-door-light-1-0.jpg	7216	5412
comic-muse-dent-boydell-1791.jpg	4996	6534
comic-muse-dent-hogarth-not-after-1793.jpg	3577	4708
comic-muse-heath-restored-by-baldwin-and-cradock-1835.jpg	4996	5300
comic-muse-moore-london-printing-and-publishing-1860s.jpg	5169	5791
comic-muse-state-4-hogarth-1758.jpg	5289	6733
comic-muse-state-5-hogarth-1758.jpg	5095	6784
comic-muse-state-6-hogarth-1758.jpg	5204	6699
comic-muse-state-7-hogarth-1764.jpg	5086	6759
comic-muse-unknown-oliphant-anderson-ferrier-1883.jpg	5083	5400
comic-muse-unknown-simpkin-1880.jpg	5007	6134
cook-gin-lane.jpg	4099	5705
copper-plate-comic-muse-hogarth-1764.jpg	3564	4128
copper-plate-smith-gulielmus-hogarth.jpg	5278	6885
cruelty-in-perfection-cook-longman-1807.jpg	5052	6261
cruelty-in-perfection-dent-boydell-1791.jpg	4980	5874
cruelty-in-perfection-dent-boydell-1793.jpg	4879	5801
cruelty-in-perfection-heath-restored-by-baldwin-and-cradock-1835.jpg	4760	5600
cruelty-in-perfection-hogarth-hogarth-feb-1-1751.jpg	5017	6208
cruelty-in-perfection-pyet-scholey-1810.jpg	4907	6558
cruelty-in-perfection-romney-john-tallis-1853.jpg	5042	6029
cruelty-in-perfection-romney-london-printing-and-publishing-1860s.jpg	5082	5929
cruelty-in-perfection-state-1-bell-hogarth-jan-1-1750.jpg	4597	5452
cruelty-in-perfection-state-2-bell-hogarth-jan-1-1750.jpg	5151	5898
cruelty-in-perfection-unknown-oliphant-anderson-ferrier-1883.jpg	5023	5918
cruelty-in-perfection-unknown-simpkin-1880.jpg	4855	5871
davidsganes-deleted.jpg	828	512
de-lafond-william-hogarth.jpg	939	1500
detail-for-hogarth-gin-lane.jpg	2589	2062
gate-of-calais-clerk-scholey-1810.jpg	6455	4606
gate-of-calais-cook-longman-1807.jpg	6375	5117
gate-of-calais-cook-stockdale-1806.jpg	6352	5008
gate-of-calais-june-sayer-1768.jpg	7021	5004
gate-of-calais-radclyffe-london-printing-and-publishing-1860s.jpg	6119	4962
gate-of-calais-unknown-sayer-1768.jpg	4447	7140
gate-of-calais-unknown-simpkin-1880.jpg	6655	4218
gin-lane-clerk-scholey-1810.jpg	4946	6806
gin-lane-dent-boydell-1791.jpg	5117	5872
gin-lane-dent-boydell-1793.jpg	4854	5623
gin-lane-heath-restored-by-baldwin-and-cradock-1835.jpg	4877	5670
gin-lane-t-cook.jpg	600	764
gin-lane-unknown-london-printing-and-publishing-1860s.jpg	5251	6017
gin-lane-unknown-oliphant-anderson-ferrier-1883.jpg	4890	5734
gin-lane-unknown-simpkin-1880.jpg	5167	6239
groups-from-marriage-a-la-mode-plate-iv-riepenhausen-not-before-1786.jpg	1119	1781
gulielmus-hogarth-barlow-boydell-1791.jpg	4821	6086
gulielmus-hogarth-c-spooner-after-hogarth-1749.jpg	2654	3535
gulielmus-hogarth-clerk-scholey-1810.jpg	4853	6051
gulielmus-hogarth-cook-longman-1809.jpg	5118	6655
gulielmus-hogarth-rockman-2022.jpg	4919	6846
gulielmus-hogarth-smith-after-hogarth-1795.jpg	2762	3624
gulielmus-hogarth-smith-baldwin-and-cradock-1835.jpg	4752	6086
gulielmus-hogarth-state-4-hogarth-1749.jpg	5711	7130
gulielmus-hogarth-unknown-jones-co-1833-full-cover.jpg	5142	6530
gulielmus-hogarth-unknown-jones-co-1833.jpg	5142	5922
gulielmus-hogarth-unknown-london-printing-and-publishing-1860s.jpg	4984	6674
gulielmus-hogarth-unknown-oliphant-anderson-ferrier-1883.jpg	4675	6148
gulielmus-hogarth-unknown-simpkin-1880.jpg	4741	6048
harlot-s-progres-plate-2-unknown-simpkin-1880.jpg	6600	4306
harlot-s-progress-plate-2-clerk-scholey-1810.jpg	6356	4753
harlot-s-progress-plate-2-cook-longman-1807.jpg	6481	5115
harlot-s-progress-plate-2-cook-stockdale-1806.jpg	6262	5030
harlot-s-progress-plate-2-corbould-dent-boydell-1791.jpg	4829	3833
harlot-s-progress-plate-2-corbould-dent-boydell-1793.jpg	6171	4931
harlot-s-progress-plate-2-davenport-jones-co-1833.jpg	6280	4962
harlot-s-progress-plate-2-davenport-london-printing-and-publishing-1860s.jpg	6196	4978
harlot-s-progress-plate-2-heath-restored-by-baldwin-and-cradock-1835.jpg	6234	5087
harlot-s-progress-plate-2-hogarth-hogarth-april-1732.jpg	5198	6389
harlot-s-progress-plate-2-unknown-sayer-1768.jpg	6352	5143
harlots-progress-plate-2-state-1-hogarth-apr-1732.jpg	3416	2848
hogarth-battle-of-pictures-feb-1745.jpg	4157	4467
hogarth-gin-lane-state-3.jpg	2929	3522
hogarth-sarah-malcom-natl-galleries-of-scotland.jpg	600	765
huntington-hogarth-gin-lane.jpg	8736	11648
job-1447.jpg	5412	7216
job-1448.jpg	5412	7216
job-1449.jpg	7216	5412
job-1450.jpg	5412	7216
job-1451.jpg	1979	1933
job-1452.jpg	7216	5412
job-1453.jpg	7216	5412
job-1458.jpg	7216	5412
job-1461.jpg	5412	7216
job-1462.jpg	5412	7216
job-1463-copy.jpg	5142	6813
job-1463.jpg	5142	6813
john-wilkes-cook-g-g-j-robinson-april-1-1800.jpg	4169	5966
john-wilkes-cook-longmam-hurst-rees-orme-july-1-1807.jpg	4692	6092
john-wilkes-esq-cook-stockdale-1806.jpg	3539	4984
john-wilkes-state-1-hogarth-hogarth-may-16-1763.jpg	2180	3398
john-wilkes-state-2-hogarth-hogarth-may-16-1763.jpg	2212	3261
julian-assange-bluelou-2010.jpg	4887	6401
les-satyres-cruelty-in-perfection.jpg	5092	6826
les-satyres-gin-lane.jpg	5031	6750
march-of-finchley-cook-longman-1809.jpg	6526	5058
march-of-the-guards-towards-scotland-state-4-sullivan-hogarth-30-dec-1750.jpg	5198	6389
march-of-the-guards-towards-scotland-state-8-sullivan-hogarth-31-dec-1750.jpg	6262	4963
march-of-the-guards-towards-scotland-sullivan-hogarth-12-june-1761.jpg	6012	4846
march-to-finchley-clerk-scholey-1810.jpg	6396	4826
march-to-finchley-cook-stockdale-1806.jpg	6310	4787
march-to-finchley-dent-boydell-1793.jpg	6250	4693
march-to-finchley-heath-restored-by-baldwin-and-cradock-1835.jpg	6451	4973
march-to-finchley-moore-london-printing-and-publishing-1860s.jpg	5270	5307
march-to-finchley-nicholson-brain-1849.jpg	6675	5081
march-to-finchley-nicholson-london-printing-and-publishing-1860s.jpg	6304	4853
march-to-finchley-unknown-sayer-1768.jpg	6752	4540
marks-to-gin-drinkers.jpg	4412	6563
marriage-a-la-merde-plate-2-rockman-2022.jpg	6766	4823
marriage-a-la-mode-plate-2-clerk-scholey-1810.jpg	6364	4570
marriage-a-la-mode-plate-2-cook-longman-1808.jpg	6396	5097
marriage-a-la-mode-plate-2-cook-stockdale-1806.jpg	6427	5153
marriage-a-la-mode-plate-2-dent-boydell-1791.jpg	4982	4101
marriage-a-la-mode-plate-2-dent-boydell-1793.jpg	6095	5052
marriage-a-la-mode-plate-2-heath-restored-by-baldwin-and-cradock-1835.jpg	6044	4838
marriage-a-la-mode-plate-2-nicholson-jones-co-1833.jpg	6348	5008
marriage-a-la-mode-plate-2-nicholson-london-printing-and-publishing-1860s.jpg	5711	4657
marriage-a-la-mode-plate-2-state-2-baron-hogarth-april-1-1745.jpg	5809	4876
marriage-a-la-mode-plate-2-unknown-sayer-1768.jpg	6722	4394
marriage-a-la-mode-plate-2-unknown-simpkin-1880.jpg	6861	4429
marriage-a-la-mode-plate-2-unknown-young-1823.jpg	6622	5041
marriage-a-la-mode-plate-4-earlom-boydell-1-jan-1798.jpg	6129	4937
marriage-a-la-mode-plate-4-ravenet-hogarth-1-april-1745.jpg	5442	7166
marshallcartoon.jpg	1226	1702
martin-and-the-pug-hogarth-cm-oct-2014-hi-res.jpg	2134	3183
martin-rowson.jpg	1000	737
midnight-modern-conversation-cook-stockdale-1806.jpg	6953	5005
midnight-modern-conversation-dent-boydell-1791.jpg	4766	3757
midnight-modern-conversation-heath-restored-by-baldwin-and-cradock-1835.jpg	6679	4857
midnight-modern-conversation-phillibrown-london-printing-and-publishing-1860s.jpg	6630	4863
midnight-modern-conversation-unknown-jones-co-1833.jpg	5254	6902
midnight-modern-conversation-unknown-simpkin-1880.jpg	6693	4280
morgan-lib-hogarth-gin-lane.jpg	1991	2500
morning-clerk-scholey-1810.jpg	4680	6250
morning-cook-longman-1807.jpg	5183	6064
morning-dent-boydell-1791.jpg	5011	5887
morning-heath-restored-by-baldwin-and-cradock-1835.jpg	4912	5844
morning-hogarth-etchmaster-1940s.jpg	5131	6611
morning-mollison-jones-co-1833.jpg	5043	6151
morning-mollison-london-printing-and-publishing-1860s.jpg	4991	6009
morning-state-2-hogarth-hogarth-march-25-1738.jpg	4926	6328
morning-unknown-oliphant-anderson-ferrier-1883.jpg	5128	6226
morning-unknown-sayer-1768.jpg	5012	6860
morning-unknown-simpkin-1880.jpg	4858	6118
mr-hogarth-hogarth-sayer-set-29-1749.jpg	732	630
mr-hogarth-london-1749.jpg	2455	3707
npg-william-hogarth-hogarth-1757-58.jpg	1452	1500
o-the-roast-beef-bell-brighton-1996.jpg	7071	4896
o-the-roast-horse-bell-brighton-2013.jpg	6636	4835
pass-the-sun-cream-williams.jpg	3509	4746
rake-s-progress-plate-3-cook-longman-1809.jpg	6297	5115
rake-s-progress-plate-3-cook-stockdale-1806.jpg	6189	5069
rake-s-progress-plate-3-corbould-dent-boydell-1793.jpg	5908	4867
rake-s-progress-plate-3-heath-restored-by-baldwin-and-cradock-1835.jpg	5694	4683
rake-s-progress-plate-3-unknown-sayer-1768.jpg	6572	5122
rake-s-progress-plate-3-worthington-jones-co-1833.jpg	6069	4881
rake-s-progress-plate-3-worthington-london-printing-and-publishing-1860s.jpg	6169	5087
rake-s-progress-plate-6-cook-longman-1808.jpg	6154	5048
rake-s-progress-plate-6-cook-stockdale-1806.jpg	6152	5017
rake-s-progress-plate-6-corbould-dent-boydell-1791.jpg	4735	3794
rake-s-progress-plate-6-corbould-dent-boydell-1793.jpg	6018	4871
rake-s-progress-plate-6-heath-restored-by-baldwin-and-cradock-1835.jpg	5634	4638
rake-s-progress-plate-6-pyett-scholey-1810.jpg	6372	4917
rake-s-progress-plate-6-radclyffe-jones-co-1833.jpg	6323	5122
rake-s-progress-plate-6-radclyffe-london-printing-and-publishing-1860s.jpg	6056	5005
rake-s-progress-plate-6-unknown-sayer-1768.jpg	6905	5170
rake-s-progress-plate-6-unknown-simpkin-1880.jpg	6647	4264
richard-lee-golden-tobacco-roll-ireland-1794.jpg	3537	5169
riepenhausen-group-gin-lane.jpg	3288	4648
roast-beef-hogarth-hogarth-march-6-1749.jpg	3985	3391
roast-beef-hogarth-sayer-not-befpre-1766.jpg	4441	6857
rockman-apologies-to-hogarth-battle-of-pictures-detail.jpg	3238	2340
rockman-apologies-to-hogarth-marriage-a-la-mode-detail.jpg	3208	2361
rockman-apologies-to-hogarth.jpg	6734	4852
rowson-gin-lane-palimpsest.jpg	4843	6833
sarah-malcolm-barlow-boydell-1791.jpg	4888	5721
sarah-malcolm-clerk-scholey-1810.jpg	4925	6834
sarah-malcolm-cook-stockdale-1806.jpg	3743	3727
sarah-malcolm-heath-restored-by-baldwin-and-cradock-1835.jpg	3698	3624
sarah-malcolm-state-2-hogarth-approx-1733.jpg	3226	3578
sarah-malcolm-unknown-london-printing-and-publishing-1860s.jpg	5092	5805
sleaze-lane-williams.jpg	3531	4519
stage-coach-clerk-scholey-1810.jpg	6767	4825
stage-coach-cook-son-longman-1808.jpg	6780	4505
stage-coach-cook-stockdale-1806.jpg	4590	3226
stage-coach-dent-boydell-1793.jpg	6959	4884
stage-coach-engleheart-jones-co-1833.jpg	6921	4926
stage-coach-heath-restored-by-baldwin-and-cradock-1835.jpg	4066	2778
stage-coach-state-2-hogarth-hogarth-1747.jpg	2842	2058
stage-coach-state-3-hogarth-hogarth-1747.jpg	2837	2062
strolling-actresses-cook-longman-1806.jpg	6582	5102
strolling-actresses-cook-stockdale-1806.jpg	6271	4723
strolling-actresses-dent-boydell-1791.jpg	6148	4827
strolling-actresses-dent-boydell-1793.jpg	6468	5094
strolling-actresses-heath-restored-by-baldwin-and-cradock-1835.jpg	5986	4755
strolling-actresses-presbury-london-printing-and-publishing-1856.jpg	6710	5119
strolling-actresses-presbury-london-printing-and-publishing-1860s.jpg	5974	4657
strolling-actresses-state-4-hogarth-hogarth-march-25-1738.jpg	6285	4921
strolling-actresses-unknown-sayer-1768.jpg	6745	4523
t-colgate-2-deleted.jpg	781	512
t-colgate.jpg	818	512
tate-the-painter-and-his-pug-hogarth-1745.jpg	2926	3753
the-bruiser-bell-after-hogarth-1763.jpg	2169	3526
the-bruiser-state-2-hogarth-1763.jpg	2570	3409
the-bruiser-state-4-hogarth-1763.jpg	2548	3395
the-bruiser-state-5-hogarth-1763.jpg	4304	6027
the-bruiser-state-6-hogarth-1763.jpg	5140	6745
the-bruiser-state-7-hogarth-1763.jpg	2580	3459
the-march-to-finchley-state-1-sullivan-hogarth-dec-1750.jpg	5222	6741
the-march-to-finchley-state-2-sullivan-hogarth-dec-1750.jpg	5239	6869
the-painters-march-from-finchly-sandby-1754.jpg	4635	5257
the-poet-and-the-painter-ca-1763.jpg	2608	2013
tit-for-tat-sandby-1763.jpg	2106	2854
williams-blinding-leading-the-blind.jpg	5099	6666`;
    static readonly mainDataHeader = "ID	Primary Image	File Name	Title	Author	Year	Repository	Credit Line	Description	Related ID	Related Distance	Link Thumbnail Image	Link Description";
    static readonly mainData = `
[Lubaina Himid]							
100		A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	A Rakes Progress Plate 3	Hogarth	1735	LWL	Courtesy of The Lewis Walpole Library, Yale University
101		Groups from Marriage a la mode Plate IV_Riepenhausen_not before 1786.tif	Groups from Marriage a la mode Plate IV	Riepenhausen	not before 1786	LWL	Courtesy of The Lewis Walpole Library, Yale University
102		Marriage á la mode Plate 4_Earlom_Boydell_1 Jan 1798.tif	Marriage á la mode Plate 4	Earlom	1798	LWL	Courtesy of The Lewis Walpole Library, Yale University
103		Marriage a-la-mode Plate 4_Ravenet_Hogarth_1 April 1745.tif	Marriage a-la-mode Plate 4	Ravenet	1745	LWL	Courtesy of The Lewis Walpole Library, Yale University
104		Harlot's Progress Plate 2_Hogarth_Hogarth_April 1732.tif	Harlot's Progress Plate 2	Hogarth	1732	LWL	Courtesy of The Lewis Walpole Library, Yale University
105		A Rake's Progress Hole in her Stocking (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
106		A Rake's Progress Hole in her Stocking (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
107		A Rake’s Progress Bottoms Up (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
108		A Rake's Progress Hole in her Stocking (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
109		A Rake’s Progress Bottoms Up (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
110		A Rake's Progress Hole in her Stocking (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
111		A Harlot’s Progress Loose Grip (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
112		A Harlot’s Progress Tight Grip (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
113		A Harlot’s Progress Loose Grip (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
114		A Rake’s Progress Bottoms Up (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
115		A Harlot’s Progress Loose Grip (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
116		A Harlot’s Progress Tight Grip (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
117		A Harlot’s Progress Tight Grip (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
118		A Rake’s Progress Bottoms Up (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
119		A Harlot’s Progress Tight Grip (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
120		A Fashionable Marriage Lot 100 (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
121		A Fashionable Marriage Castrato Krytyk (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
122		A Fashionable Marriage Lot 100 (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
123		A Harlot’s Progress Loose Grip (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
124		A Fashionable Marriage Castrato Krytyk (1)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
125		A Fashionable Marriage Lot 100 (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
126		A Fashionable Marriage Castrato Krytyk (3)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
127		A Fashionable Marriage Lot 100 (4)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London
128		A Fashionable Marriage Castrato Krytyk (2)~hi.jpg		Lubaina Himid		Contemporary Artist	With kind permission of Lubaina Himid, Magda Stawarska and Cristea Roberts Gallery, London

[Gin Lane]							
200		Sleaze Lane_Williams.jpg	Sleaze Lane	Nick Williams			NO PERMISSIONS CANNOT USE
201		Pass the Sun cream_Williams.jpg	Pass the Sun-Cream Bojo	Nick Williams			NO PERMISSIONS CANNOT USE
202		Williams_Blinding Leading the Blind.tif	Blind Leading the Blind Alley	Nick Williams			NO PERMISSIONS CANNOT USE
203		Rowson_Gin Lane Palimpsest.tif	Gin Lane	Martin Rowson		LWL	Courtesy of The Lewis Walpole Library, Yale University
204		Bell_The death of Boris Yeltsin.tif	The death of Boris Yeltsin	Steve Bell		LWL	Courtesy of The Lewis Walpole Library, Yale Unversity
205		Les Satyres ... Gin Lane	Gin Lane	William Hogarth 		LWL	Courtesy of The Lewis Walpole Library, Yale University
206		Riepenhausen Group_Gin Lane.tif	[Groups from Hogarth's "Gin Lane". I]	Ernst Ludwig Riepenhausen	not before 1787	LWL	Courtesy of The Lewis Walpole Library, Yale University
207		Marks_To gin drinkers.tif	To gin drinkers!!	John Lewis Marks	between 1832-1855	LWL	Courtesy of The Lewis Walpole Library, Yale University
208		Morgan Lib_Hogarth_Gin Lane.jpg	Gin Street	William Hogarth	1750-1751	Morgan Library	The Morgan Library & Museum. III, 36. Purchased by Pierpont Morgan (1837-1913) in 1909.
209		Huntington Hogarth_Gin Lane.jpeg	Gin Lane	Attributed to William Hogarth	n.d.	Huntington Library	Attributed to William Hogarth (British, 1697-1764), Gin Lane, n.d. Black and red pencil, 16 1/4 x 12 1/2 in. (41.3 x 31.8 cm). The Huntington Library, Art Museum, and Botanical Gardens. © Courtesy of the Huntington Art Museum, San Marino, California.
210		Detail for Hogarth Gin Lane.tif	Detail from a copy of Hogarth's Gin lane	William Hogarth	between 1770-1800?	LWL	Courtesy of The Lewis Walpole Library, Yale University
211	1	Hogarth_Gin Lane_State 3.tif	Gin Lane	William Hogarth	Feb 1, 1751	LWL	Courtesy of The Lewis Walpole Library, Yale University
212		Cook_Gin Lane.tif	Gin Lane	Thomas Cook	June 1, 1800	LWL	Courtesy of The Lewis Walpole Library, Yale University
213		Gin Lane_Unknown_Simpkin_1880.tif	Gin Lane	Artist once known	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
214		Gin Lane_Clerk_Scholey_1810.tif	Gin Lane	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
215		Gin Lane_Unknown_London Printing and Publishing_1860s.tif	Gin Lane	Artist once known	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
216		Gin Lane_Dent_Boydell_1791.tif	Gin Lane	William Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
217		Gin Lane_Unknown_Oliphant Anderson & Ferrier_1883.tif	Gin Lane	Artist once known	1883	LWL	Courtesy of The Lewis Walpole Library, Yale University
218		Gin Lane_Heath (restored by)_Baldwin and Cradock_1835.tif	Gin Lane	Artist once known	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
219		Gin Lane_Dent_Boydell_1793.tif	Gin Lane	Wiliam Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Morning]							
300		Morning_Hogarth_Etchmaster_1940s.tif	Morning	Etchmaster after Hogarth	[1940's]	LWL	Courtesy of The Lewis Walpole Library, Yale University
301		Morning_Unknown_Sayer_1768.tif	Morning	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
302		Morning_Unknown_Oliphant Anderson & Ferrier_1883.tif	Morning	Unknown	1883	LWL	Courtesy of The Lewis Walpole Library, Yale University
303		Morning_Unknown_Simpkin_1880.tif	Morning	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
304		Morning_Mollison_Jones & Co._1833.tif	Morning	Mollison	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
305		Morning_Cook_Longman_1807.tif	Morning	Thomas Cook	1807	LWL	Courtesy of The Lewis Walpole Library, Yale University
306		Morning_Mollison_London Printing and Publishing_1860s.tif	Morning	Mollison	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
307		Morning_Dent_Boydell_1791.tif	Morning	Willaim Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
308		Morning_Clerk_Scholey_1810.tif	Morning	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
309		Morning_Heath (restored by)_Baldwin and Cradock_1835.tif	Morning	James Heath (restored by)	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
310	1	Morning State 2_Hogarth_Hogarth_March 25 1738.tif		William Hogarth	1738	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Marriage a la mode Plate 2]							
400		Rockman_Apologies to Hogarth_Marriage a la mode detail.tif	Marriage a-la-merde. (Plate II) Draft	Zoom Rockman	2022	Contemporary Artist	Apologies to Hogarth and Marriage a-la-merde. (Plate II) by Zoom Rockman 2022
401		Marriage a-la-merde Plate 2_Rockman_2022.tif	Marriage a-la-merde. (Plate II)	Zoom Rockman	2022	Contemporary Artist	Apologies to Hogarth and Marriage a-la-merde. (Plate II) by Zoom Rockman 2022
402		Marriage a-la Mode plate 2_Cook_Stockdale_1806.tif	Marriage a-la-Mode Plate 2	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
403		Marriage a-la-Mode plate 2_Unknown_Young_1823.tif	Marriage a-la-Mode Plate 2	Unknown	1823	LWL	Courtesy of The Lewis Walpole Library, Yale University
404		Marriage a-la-Mode plate 2_Unknown_Simpkin_1880.tif	Marriage a-la-Mode Plate 2	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
405		Marriage a-la-Mode plate 2_Unknown_Sayer_1768.tif	Marriage a-la-Mode Plate 2	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
406		Marriage a-la-Mode plate 2_Nicholson_London Printing and Publishing_1860s.tif	Marriage a-la-Mode Plate 2	Nicholson	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
407		Marriage a-la-Mode plate 2_Cook_Longman_1808.tif	Marriage a-la-Mode Plate 2	Thomas Cook	1808	LWL	Courtesy of The Lewis Walpole Library, Yale University
408		Marriage a-la-Mode plate 2_Nicholson_Jones & Co._1833.tif	Marriage a-la-Mode Plate 2	Nicholson	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
409		Marriage a-la-Mode plate 2_Dent_Boydell_1793.tif	Marriage a-la-Mode Plate 2	Willaim Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
410		Marriage a-la-Mode plate 2_Heath (restored by)_Baldwin and Cradock_1835.tif	Marriage a-la-Mode Plate 2	James Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
411		Marriage a-la-Mode plate 2_Clerk_Scholey_1810.tif	Marriage a-la-Mode Plate 2	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
412		Marriage a-la-Mode plate 2_Dent_Boydell_1791.tif	Marriage a-la-Mode Plate 2	Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
413	1	Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode Plate 2	William Hogarth	1732	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Battle of Pictures]							
500		Rockman_Apologies to Hogarth_Battle of Pictures detail.tif	Battle of Pictures	Zoom Rockman	2022	Contemporary Artist	Courtesy of The Lewis Walpole Library, Yale University
501		Gulielmus Hogarth_Rockman_2022.tif	Gulielmus Hogarth	Zoom Rockman	2022	Contemporary Artist	Courtesy of The Lewis Walpole Library, Yale University
502		Strolling Actresses State 4_Hogarth_Hogarth_March 25, 1738.tif	Strolling Actresses State 4	William Hogarth	1738	LWL	Courtesy of The Lewis Walpole Library, Yale University
503		A rakes progress Plate 6_Hogarth_Hogarth_June 25 1735.tif	A Rake's Progress Plate 6	William Hogarth	1735	LWL	Courtesy of The Lewis Walpole Library, Yale University
504		Richard Lee Golden Tobacco Roll_Ireland_1794.tif	Richard Lee at [the] Golden Tobacco Roll	Samuel Ireland	1794	LWL	Courtesy of The Lewis Walpole Library, Yale University
505		A midnight modern conversation_Reipenhausen__not before 1786.tif	A midnight modern conversation	Reipenhausen	1786	LWL	Courtesy of The Lewis Walpole Library, Yale University
506		A midnight modern conversation State 3_Hogarth_Hogarth_March 1732.tif	A midnight modern conversation State 3	William Hogarth	1732	LWL	Courtesy of The Lewis Walpole Library, Yale University
507		Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlots Progress Plate 2 State 1	William Hogarth	1732	LWL	Courtesy of The Lewis Walpole Library, Yale University
508	1	Hogarth_Battle of Pictures_Feb 1745.tif	Battle of Pictures	Willaim Hogarth	1745	LWL	Courtesy of The Lewis Walpole Library, Yale University
509		Battle of the Pictures_Barlow_Boydell_1791.tif	Battle of Pictures	Barlow	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
510		Battle of the Pictures_Unknown_Simpkin_1880.tif	Battle of Pictures	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
511		Battle of the Pictures_Cook_Stockdale_1806.tif	Battle of Pictures	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Harlots Progress Plate 2]							
600		Harlot's Progress plate 2_Unknown_Sayer_1768.tif	A Harlot's Progress plate 2	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
601		Harlot's Progress plate 2_Heath (restored by)_Baldwin and Cradock_1835.tif	A Harlot's Progress plate 2	James Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
602		Harlot's Progress plate 2_Davenport_London Printing and Publishing_1860s.tif	A Harlot's Progress plate 2	Davenport	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
603		Harlot's Progress plate 2_Davenport_Jones & Co._1833.tif	A Harlot's Progress plate 2	Davenport	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
604		Harlot's Progress plate 2_Cook_Longman_1807.tif	A Harlot's Progress plate 2	Thomas Cook	1807	LWL	Courtesy of The Lewis Walpole Library, Yale University
605		Harlot's Progress plate 2_Cook_Stockdale_1806.tif	A Harlot's Progress plate 2	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
606		Harlot's Progress plate 2_Corbould & Dent_Boydell_1793.tif	A Harlot's Progress plate 2	Corbould & Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
607		Harlot's Progress plate 2_Clerk_Scholey_1810.tif	A Harlot's Progress plate 2	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
608		Harlot's Progres plate 2_Unknown_Simpkin_1880.tif	A Harlot's Progress plate 2	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
609		Harlot's Progress plate 2_Corbould & Dent_Boydell_1791.tif	A Harlot's Progress plate 2	Corbould & Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
610	1	Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	A Harlot's Progress plate 2	William Hogarth	1732	LWL	Courtesy of The Lewis Walpole Library, Yale University

[John Wilkes]							
700		Boris Johnson_Williams_2021.tif	Boris Johnson	Nick Williams	2021	Contemporary Artist	NO PERMISSIONS CANNOT USE
701		Julian Assange_Bluelou_2010.tif	Julian Assange	Bluelou	2010	Courtesy of the Lewis Walpole Library, Yale University, with kind permission of the artist	
702		John Wilkes_Cook_Longmam,Hurst, Rees & Orme_July 1, 1807.tif	John Wilkes	Thomas Cook	1807	Courtesy of the Lewis Walpole Library, Yale University	
703		John Wilkes_Cook_G.G. & J. Robinson_April 1, 1800.tif	John Wilkes	Thomas Cook	1800	Courtesy of the Lewis Walpole Library, Yale University	
704		John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif	John Wilkes State 2	William Hogarth	1763	Courtesy of the Lewis Walpole Library, Yale University	
705	1	John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes State 1	William Hogarth 	1763	Courtesy of the Lewis Walpole Library, Yale University	
706		John Wilkes Esq_Cook_Stockdale_1806.tif	John Wilkes Esq	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University

[March of Finchley]							
800		A new book of small figures from Hogarth_Hogarth_Laurie & Whittle_12 May 1794.tif	A new book of small figures from Hogarth and Cochin	William Hogarth	1794	LWL	Courtesy of The Lewis Walpole Library, Yale University
801	1	The march to Finchley State 1_Sullivan_Hogarth_Dec 1750.tif	The march to Finchley State 1	Luke Sullivan after William Hogarth 	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
802		The march to Finchley State 2_Sullivan_Hogarth_Dec 1750.tif	The march to Finchley State 2	Luke Sullivan after William Hogarth 	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
803		March of the guards towards Scotland State 4_Sullivan_Hogarth_30 Dec 1750.tif	March of the guards towards Scotland State 4	Luke Sullivan after William Hogarth 	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
804		March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March of the guards towards Scotland State 8	Luke Sullivan after William Hogarth 	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
805		March of the guards towards Scotland_Sullivan_Hogarth_12 June 1761.tif	March of the guards towards Scotland	Luke Sullivan after William Hogarth 	1761	LWL	Courtesy of The Lewis Walpole Library, Yale University
806		The painters march from Finchly_Sandby_1754.tif	The painters march from Finchly	Paul Sandby	1754	LWL	Courtesy of The Lewis Walpole Library, Yale University
807		March of Finchley_Cook_Longman_1809.tif	March of Finchley	Thomas Cook	1809	LWL	Courtesy of The Lewis Walpole Library, Yale University
808		March to Finchley_Unknown_Sayer_1768.tif	March to Finchley	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
809		March to Finchley_Nicholson_London Printing and Publishing_1860s.tif	March to Finchley	Nicholson	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
810		March to Finchley_Nicholson_Brain_1849.tif	March to Finchley	Nicholson	1849	LWL	Courtesy of The Lewis Walpole Library, Yale University
811		March to Finchley_Heath (restored by)_Baldwin and Cradock_1835.tif	March to Finchley	Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
812		March to Finchley_Clerk_Scholey_1810.tif	March to Finchley	Scholey	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
813		March to Finchley_Cook_Stockdale_1806.tif	March to Finchley	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
814		March to Finchley_Dent_Boydell_1793.tif	March to Finchley	William Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
815		March to Finchley_Moore_London Printing and Publishing_1860s.tif	March to Finchley	Moore	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Stage Coach]							
900	1	A country inn_Hogarth_between 1747-1800.tif	A country inn	Hogarth	1747-1800	LWL	Courtesy of The Lewis Walpole Library, Yale University
901		Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage coach State 3	Hogarth	1747	LWL	Courtesy of The Lewis Walpole Library, Yale University
902		Stage Coach State 2_Hogarth_Hogarth_1747.tif	Stage Coach State 2	Hogarth	1747	LWL	Courtesy of The Lewis Walpole Library, Yale University
903		Stage Coach_Dent_Boydell_1793.tif	Stage Coach	Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
904		Stage Coach_Engleheart_Jones & Co._1833.tif	Stage Coach	Engleheart	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
905		Stage Coach_Clerk_Scholey_1810.tif	Stage Coach	Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
906		Stage Coach_Cook & Son_Longman_1808.tif	Stage Coach	Cook & Son	1808	LWL	Courtesy of The Lewis Walpole Library, Yale University
907		Stage Coach_Cook_Stockdale_1806.tif	Stage Coach	Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
908		Stage Coach_Heath (restored by)_Baldwin and Cradock_1835.tif	Stage Coach	Baldwin	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Gate of Calais]							
1000		Bold and enterprising lads_Hogarth_not before 1749.tif	Bold and enterprising lads	William Hogarth	not before 1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1001		Bold and enterprising lads_Hogarth_R.Shaw_not before 1749.tif	Bold and enterprising lads	William Hogarth	not before 1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1002		Mr. Hogarth_Hogarth_Sayer_Set 29,1749.tif	Mr. Hogarth	William Hogarth	1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1003		2014 LWL Lecture Poster.jpg		--		LWL	Courtesy of The Lewis Walpole Library, Yale University
1004		O the roast beef_Bell_Brighton_1996.tif	O the roast beef	Steve Bell		Contemporary Artist	Courtesy of The Lewis Walpole Library, Yale University
1005		O the roast horse_Bell_Brighton_2013.tif	O the roast horse	Steve Bell		Contemporary Artist	Courtesy of The Lewis Walpole Library, Yale University
1006		Roast beef_Hogarth_Sayer_not befpre 1766.tif	Roast beef	William Hogarth	not before 1766	LWL	Courtesy of The Lewis Walpole Library, Yale University
1007	1	Roast beef_Hogarth_Hogarth_March 6 1749.tif	Roast beef	William Hogarth	1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1008		Mr. Hogarth_London_1749.tif	Mr. Hogarth		1749?	LWL	Courtesy of The Lewis Walpole Library, Yale University
1009		Gate of Calais_Unknown_Simpkin_1880.tif	Gate of Calais	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1010		Gate of Calais_Unknown_Sayer_1768.tif	Gate of Calais	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
1011		Gate of Calais_Cook_Stockdale_1806.tif	Gate of Calais	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1012		Gate of Calais_Cook_Longman_1807.tif	Gate of Calais	Thomas Cook	1807	LWL	Courtesy of The Lewis Walpole Library, Yale University
1013		Gate of Calais_Radclyffe_London Printing and Publishing_1860s.tif	Gate of Calais	Radclyffe	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1014		Gate of Calais_Clerk_Scholey_1810.tif	Gate of Calais	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1015		Gate of Calais_June_Sayer_1768.tif	Gate of Calais	June	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Midnight Modern]							
1100		Midnight Modern Conversation_Cook_Stockdale_1806.tif	Midnight Modern Conversation	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1101		Midnight Modern Conversation_Phillibrown_London Printing and Publishing_1860s.tif	Midnight Modern Conversation	Phillibrown	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1102		Midnight Modern Conversation_Heath (restored by)_Baldwin and Cradock_1835.tif	Midnight Modern Conversation	Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1103		Midnight Modern Conversation_Unknown_Simpkin_1880.tif	Midnight Modern Conversation	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1104	1	Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation	Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1105		Midnight Modern Conversation_Unknown_Jones & Co._1833.tif	Midnight Modern Conversation	Unknown	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Strolling Actresses]							
1200	1	Strolling Actresses_Unknown_Sayer_1768.tif	Strolling Actresses	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
1201		Strolling Actresses_Presbury_London Printing and Publishing_1860s.tif	Strolling Actresses	Presbury	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1202		Strolling Actresses_Presbury_London Printing and Publishing_1856.tif	Strolling Actresses	Presbury	1856	LWL	Courtesy of The Lewis Walpole Library, Yale University
1203		Strolling Actresses_Cook_Longman_1806.tif	Strolling Actresses	Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1204		Strolling Actresses_Dent_Boydell_1793.tif	Strolling Actresses	William Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
1205		Strolling Actresses_Dent_Boydell_1791.tif	Strolling Actresses	William Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1206		Strolling Actresses_Cook_Stockdale_1806.tif	Strolling Actresses	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1207		Strolling Actresses_Heath (restored by)_Baldwin and Cradock_1835.tif	Strolling Actresses	James Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Sarah Malcolm]							
1300		Sarah Malcolm_Clerk_Scholey_1810.tif	Sarah Malcolm	Thomas Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1301		Sarah Malcolm_Unknown_London Printing and Publishing_1860s.tif	Sarah Malcolm	Unknown	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1302		Sarah Malcolm_Barlow_Boydell_1791.tif	Sarah Malcolm	Barlow	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1303		Sarah Malcolm_Cook_Stockdale_1806.tif	Sarah Malcolm	Thomas Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1304		Sarah Malcolm_Heath (restored by)_Baldwin and Cradock_1835.tif	Sarah Malcolm	James Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1305	1	Hogarth_Sarah Malcom_Natl Galleries of Scotland.jpg	Sarah Malcolm (died 1733)	William Hogarth	1733	Nat'l Gallery of Scotland	National Galleries of Scotland.  Bequest of Lady Jane Dundas 1897. Photography by Antonia Reeve
1306		Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm Executed in Fleet Street	William Hogarth	1733	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Rakes Progress Plate 6]							
1400		Rake's Progress plate 6_Unknown_Simpkin_1880.tif	Rake's Progress plate 6	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1401		Rake's Progress plate 6_Radclyffe_London Printing and Publishing_1860s.tif	Rake's Progress plate 6	Radclyffe	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1402		Rake's Progress plate 6_Radclyffe_Jones & Co._1833.tif	Rake's Progress plate 6	Radclyffe	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
1403		Rake's Progress plate 6_Unknown_Sayer_1768.tif	Rake's Progress plate 6	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
1404		Rake's Progress plate 6_Pyett_Scholey_1810.tif	Rake's Progress plate 6	Pyett	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1405		Rake's Progress plate 6_Cook_Longman_1808.tif	Rake's Progress plate 6	Cook	1808	LWL	Courtesy of The Lewis Walpole Library, Yale University
1406		Rake's Progress plate 6_Cook_Stockdale_1806.tif	Rake's Progress plate 6	Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1407		Rake's Progress plate 6_Corbould & Dent_Boydell_1793.tif	Rake's Progress plate 6	Corbould & Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
1408		Rake's Progress plate 6_Heath (restored by)_Baldwin and Cradock_1835.tif	Rake's Progress plate 6	Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1409	1	Rake's Progress plate 6_Corbould & Dent_Boydell_1791.tif	Rake's Progress plate 6	Corbould & Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Rakes Progress Plate 3]							
1500		Rake's Progress plate 3_Worthington_London Printing and Publishing_1860s.tif	Rake's Progress plate 3	Worthington	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1501	1	Rake's Progress plate 3_Unknown_Sayer_1768.tif	Rake's Progress plate 3	Unknown	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
1502		Rake's Progress plate 3_Cook_Longman_1809.tif	Rake's Progress plate 3	Cook	1809	LWL	Courtesy of The Lewis Walpole Library, Yale University
1503		Rake's Progress plate 3_Cook_Stockdale_1806.tif	Rake's Progress plate 3	Cook	1806	LWL	Courtesy of The Lewis Walpole Library, Yale University
1504		Rake's Progress plate 3_Worthington_Jones & Co._1833.tif	Rake's Progress plate 3	Worthington	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
1505		Rake's Progress plate 3_Corbould & Dent_Boydell_1793.tif	Rake's Progress plate 3	Corbould & Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
1506		Rake's Progress plate 3_Heath (restored by)_Baldwin and Cradock_1835.tif	Rake's Progress plate 3	Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University

[Self-portrait Comic Muse]							
1600	1	NPG_William Hogarth_Hogarth_1757-58.jpg	William Hogarth	William Hogarth	1757-58	National Portrait Gallery	 © National Portrait Gallery, London
1601		Comic Muse State 4_Hogarth_1758.tif	Comic Muse State 4	William Hogarth	1758	Courtesy of the Lewis Walpole Library, Yale University	
1602		Comic Muse State 6_Hogarth_1758.tif	Comic Muse State 6	William Hogarth	1758	Courtesy of the Lewis Walpole Library, Yale University	
1603		Comic Muse State 5_Hogarth_1758.tif	Comic Muse State 5	William Hogarth	1758	Courtesy of the Lewis Walpole Library, Yale University	
1604		Comic Muse State 7_Hogarth_1764.tif	Comic Muse State 7	William Hogarth 	1764	Courtesy of the Lewis Walpole Library, Yale University	
1605		Comic muse_Dent_Hogarth_not after 1793.tif	Comic Muse	William Dent	not after 1793	Courtesy of the Lewis Walpole Library, Yale University	
1606		Copper Plate_Comic Muse_Hogarth_1764.tif	Comic Muse	William Hogarth 	1764	Courtesy of the Lewis Walpole Library, Yale University	
1607		Comic Muse_Unknown_Simpkin_1880.tif	Comic Muse	Artist once known	1880	Courtesy of the Lewis Walpole Library, Yale University	
1608		Comic Muse_Moore_London Printing and Publishing_1860s.tif	Comic Muse	James Moore	1860's	Courtesy of the Lewis Walpole Library, Yale University	
1609		Comic Muse_Unknown_Oliphant Anderson & Ferrier_1883.tif	Comic Muse	Artist once known	1883	Courtesy of the Lewis Walpole Library, Yale University	
1610		Comic Muse_Heath (restored by)_Baldwin and Cradock_1835.tif	Comic Muse	James Heath	1835	Courtesy of the Lewis Walpole Library, Yale University	
1611		Comic Muse_Clerk_Scholey_1810.tif	Comic Muse	Thomas Clerk	1810	Courtesy of the Lewis Walpole Library, Yale University	
1612		Comic Muse_Dent_Boydell_1791.tif	Comic Muse	William Dent	1791	Courtesy of the Lewis Walpole Library, Yale University	
1613		Tit for Tat_Sandby_1763.tif	Tit for Tat	Attributed to Paul Sandby	1763?	Courtesy of the Lewis Walpole Library, Yale University	
1614		An Answer John Wilkes_1763.tif	An answer to the print of Iohn Wilkes Esqr. by Wm. Hogarth	William Hogarth 	1763	Courtesy of the Lewis Walpole Library, Yale University	

[Self-portrait with Pug]							
1700	1	Tate_The Painter and his Pug_Hogarth_1745.jpg	The Painter and his pug	Hogarth	1745	The Tate	The Painter and his Pug, 1745, William Hogarth. Tate, Purchased 1824. Photo: Tate
1701		Alamy_ Umm al_Quwain stamp of Hogarth.jpg				Alamy	Sergey Nezhinkiy / Alamy Stock Photo, 15 September 2012
1702		Gulielmus Hogarth_Unknown_Jones & Co._1833_full cover.tif	Gulielmus Hogarth	Unknown	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
1703		de LaFond_William Hogarth.jpg				n/a	
1704		Gulielmus Hogarth_Smith after Hogarth_1795.tif	Gulielmus Hogarth	Smith after Hogarth	1795	LWL	Courtesy of The Lewis Walpole Library, Yale University
1705		The Bruiser State 6_Hogarth_1763.tif	The bruiser, C. Churchill	William Hogarth	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1706		The Bruiser State 5_Hogarth_1763.tif	The bruiser, C. Churchill	William Hogarth	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1707		The Bruiser State 4_Hogarth_1763.tif	The bruiser, C. Churchill	William Hogarth	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1708		The Bruiser State 7_Hogarth_1763.tif	The bruiser, C. Churchill	William Hogarth	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1709		The Bruiser State 2_Hogarth_1763.tif	The bruiser, C. Churchill	William Hogarth	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1710		Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth	William Hogarth	1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1711		Copper Plate_Smith_Gulielmus Hogarth.tif	William Hogarth	Benjamin Smith	1795	LWL	Courtesy of The Lewis Walpole Library, Yale University
1712		Gulielmus Hogarth_C Spooner after Hogarth_1749.tif	Gulielmus Hogarth	Spooner after Hogarth	1749	LWL	Courtesy of The Lewis Walpole Library, Yale University
1713		The Bruiser_Bell after Hogarth_1763.tif	The bruiser, C. Churchill	Bell after Hogarth	1763	Contemporary Artist	Courtesy of The Lewis Walpole Library, Yale University
1714		Rockman_Apologies to Hogarth.tif	Apologies to Hogarth	Zoom Rockman		Contemporary Artist	Apologies to Hogarth by Zoom Rockman 2022
1715		Gulielmus Hogarth_Unknown_London Printing and Publishing_1860s.tif	Gulielmus Hogarth	Unknown	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1716		Gulielmus Hogarth+Unknown_Oliphant Anderson & Ferrier_1883.tif	Gulielmus Hogarth	Unknown	1883	LWL	Courtesy of The Lewis Walpole Library, Yale University
1717		Gulielmus Hogarth_Unknown_Simpkin_1880.tif	Gulielmus Hogarth	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1718		Apologies to Hogarth detail_Rockman_2022.tif	Gulielmus Hogarth	Zoom Rockman	2022	Contemporary Artist	Apologies to Hogarth by Zoom Rockman 2022
1719		Gulielmus Hogarth_Cook_Longman_1809.tif	Gulielmus Hogarth	Cook	1809	LWL	Courtesy of The Lewis Walpole Library, Yale University
1720		Gulielmus Hogarth_Unknown_Jones & Co._1833.tif	Gulielmus Hogarth	Unknown	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
1721		Gulielmus Hogarth_Smith_Baldwin and Cradock_1835.tif	Gulielmus Hogarth	Smith	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1722		Gulielmus Hogarth_Clerk_Scholey_1810.tif	Gulielmus Hogarth	Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1723		Gulielmus Hogarth_Barlow_Boydell_1791.tif	Gulielmus Hogarth	Barlow	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1724		Bruiser_Unknown_Simpkin_1880.tif	Bruiser	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1725		Bruiser_Unknown_Oliphant Anderson & Ferrier_1883.tif	Bruiser	Unknown	1883	LWL	Courtesy of The Lewis Walpole Library, Yale University
1726		Bruiser_Dent_Boydell_1791.tif	Bruiser	Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1727		Bruiser_Mills_London Printing and Publishing_1860s.tif	Bruiser	Mills	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1728		Bruiser_Clerk_Scholey_1810.tif	Bruiser	Clerk	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1729		Bruiser_Cook_Longman_1807.tif	Bruiser	Cook	1807	LWL	Courtesy of The Lewis Walpole Library, Yale University
1730		Bruiser_Heath (restored by)_Baldwin and Cradock_1835.tif	Bruiser	James Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1731		Bruiser_Mills_Jones & Co._1833.tif	Bruiser	Mills	1833	LWL	Courtesy of The Lewis Walpole Library, Yale University
1732		The poet and the painter_ca 1763.tif	The poet and the painter	Unidenitifed 	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1733		A satire on Hogarth and the Rev C Churchill_1763.tif	A satire on Hogarth and the Rev C Churchill	Unidentified 	1763	LWL	Courtesy of The Lewis Walpole Library, Yale University
1734		Martin and the pug_Hogarth CM Oct 2014_hi res.jpg	Martin and the pug		2014		Photo Credit Kasia Kowalski

[Stages of Cruelty]							
1800		Les Satyres ... Cruelty in Perfection.tif	Cruelty in Perfection	William Hogarth	1768	LWL	Courtesy of The Lewis Walpole Library, Yale University
1801		Cruelty in Perfection_Unknown_Simpkin_1880.tif	Cruelty in Perfection	Unknown	1880	LWL	Courtesy of The Lewis Walpole Library, Yale University
1802		Cruelty in Perfection_Unknown_Oliphant Anderson & Ferrier_1883.tif	Cruelty in Perfection	Unknown	1883	LWL	Courtesy of The Lewis Walpole Library, Yale University
1803		Cruelty in Perfection_Romney_London Printing and Publishing_1860s.tif	Cruelty in Perfection	Romney	1860's	LWL	Courtesy of The Lewis Walpole Library, Yale University
1804		Cruelty in Perfection_Pyet_Scholey_1810.tif	Cruelty in Perfection	Pyet	1810	LWL	Courtesy of The Lewis Walpole Library, Yale University
1805		Cruelty in Perfection_Romney_John Tallis_1853.tif	Cruelty in Perfection	Romney	1853	LWL	Courtesy of The Lewis Walpole Library, Yale University
1806		Cruelty in Perfection_Dent_Boydell_1793.tif	Cruelty in Perfection	William Dent	1793	LWL	Courtesy of The Lewis Walpole Library, Yale University
1807		Cruelty in Perfection_Heath (restored by)_Baldwin and Cradock_1835.tif	Cruelty in Perfection	Heath	1835	LWL	Courtesy of The Lewis Walpole Library, Yale University
1808		Cruelty in Perfection_Cook_Longman_1807.tif	Cruelty in Perfection	Thomas Cook	1807	LWL	Courtesy of The Lewis Walpole Library, Yale University
1809		Cruelty in Perfection_Dent_Boydell_1791.tif	Cruelty in Perfection	William Dent	1791	LWL	Courtesy of The Lewis Walpole Library, Yale University
1810		Cruelty in perfection State 1_Bell_Hogarth_Jan 1 1750.tif		John Bell after William Hogarth	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
1811		Cruelty in perfection State 2_Bell_Hogarth_Jan 1 1750.tif		John Bell after William Hogarth	1750	LWL	Courtesy of The Lewis Walpole Library, Yale University
1812	1	Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif		William Hogarth			Courtesy of The Lewis Walpole Library, Yale University`;

    static readonly imagePairs = `
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Gin Lane_Unknown_London Printing and Publishing_1860s.tif

Hogarth_Gin Lane_State 3.tif	Rowson_Gin Lane Palimpsest.tif
Hogarth_Gin Lane_State 3.tif	Bell_The death of Boris Yeltsin.tif
Hogarth_Gin Lane_State 3.tif	Les Satyres ... Gin Lane
Hogarth_Gin Lane_State 3.tif	Riepenhausen Group_Gin Lane.tif
Hogarth_Gin Lane_State 3.tif	Marks_To gin drinkers.tif
Hogarth_Gin Lane_State 3.tif	Morgan Lib_Hogarth_Gin Lane.jpg
Hogarth_Gin Lane_State 3.tif	Cook_Gin Lane.tif
Hogarth_Gin Lane_State 3.tif	Huntington Hogarth_Gin Lane.jpeg
Hogarth_Gin Lane_State 3.tif	Gin Lane_Unknown_Simpkin_1880.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Unknown_London Printing and Publishing_1860s.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Clerk_Scholey_1810.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Dent_Boydell_1791.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Unknown_Oliphant Anderson & Ferrier_1883.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Heath (restored by)_Baldwin and Cradock_1835.tif
Hogarth_Gin Lane_State 3.tif	Gin Lane_Dent_Boydell_1793.tif

John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif
John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	Julian Assange_Bluelou_2010.tif
John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes_Cook_Longmam,Hurst, Rees & Orme_July 1, 1807.tif
John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes_Cook_G.G. & J. Robinson_April 1, 1800.tif
John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes Esq_Cook_Stockdale_1806.tif

NPG_William Hogarth_Hogarth_1757-58.jpg	Comic Muse State 4_Hogarth_1758.tif
NPG_William Hogarth_Hogarth_1757-58.jpg	Comic Muse State 5_Hogarth_1758.tif
NPG_William Hogarth_Hogarth_1757-58.jpg	Comic Muse State 6_Hogarth_1758.tif
NPG_William Hogarth_Hogarth_1757-58.jpg	Comic Muse State 7_Hogarth_1764.tif
Comic Muse State 4_Hogarth_1758.tif	Comic Muse State 5_Hogarth_1758.tif
Comic Muse State 5_Hogarth_1758.tif	Comic Muse State 6_Hogarth_1758.tif
Comic Muse State 6_Hogarth_1758.tif	Comic Muse State 7_Hogarth_1764.tif
Comic Muse State 4_Hogarth_1758.tif	Comic muse_Dent_Hogarth_not after 1793.tif
Comic Muse State 4_Hogarth_1758.tif	Comic Muse_Unknown_Simpkin_1880.tif
Comic Muse State 4_Hogarth_1758.tif	Comic Muse_Moore_London Printing and Publishing_1860s.tif
Comic Muse State 4_Hogarth_1758.tif	Comic Muse_Unknown_Oliphant Anderson & Ferrier_1883.tif
Comic Muse State 7_Hogarth_1764.tif	Copper Plate_Comic Muse_Hogarth_1764.tif
Comic Muse State 7_Hogarth_1764.tif	Comic Muse_Heath (restored by)_Baldwin and Cradock_1835.tif
Comic Muse State 7_Hogarth_1764.tif	Comic Muse_Clerk_Scholey_1810.tif
Comic Muse State 4_Hogarth_1758.tif	Tit for Tat_Sandby_1763.tif
Comic Muse State 7_Hogarth_1764.tif	An Answer John Wilkes_1763.tif

Roast beef_Hogarth_Hogarth_March 6 1749.tif	2014 LWL Lecture Poster.jpg
Roast beef_Hogarth_Hogarth_March 6 1749.tif	Mr. Hogarth_Hogarth_Sayer_Set 29,1749.tif
2014 LWL Lecture Poster.jpg	O the roast beef_Bell_Brighton_1996.tif
2014 LWL Lecture Poster.jpg	O the roast horse_Bell_Brighton_2013.tif
O the roast beef_Bell_Brighton_1996.tif	O the roast horse_Bell_Brighton_2013.tif
Roast beef_Hogarth_Hogarth_March 6 1749.tif	Mr. Hogarth_London_1749.tif
Roast beef_Hogarth_Hogarth_March 6 1749.tif	Gate of Calais_Unknown_Sayer_1768.tif
Gate of Calais_Unknown_Sayer_1768.tif	Gate of Calais_June_Sayer_1768.tif
Roast beef_Hogarth_Hogarth_March 6 1749.tif	Gate of Calais_Unknown_Simpkin_1880.tif
Gate of Calais_Unknown_Sayer_1768.tif	Gate of Calais_Cook_Stockdale_1806.tif
Gate of Calais_Cook_Stockdale_1806.tif	Gate of Calais_Cook_Longman_1807.tif
Gate of Calais_Unknown_Sayer_1768.tif	Gate of Calais_Radclyffe_London Printing and Publishing_1860s.tif
Gate of Calais_Clerk_Scholey_1810.tif	Roast beef_Hogarth_Sayer_not befpre 1766.tif
Roast beef_Hogarth_Sayer_not befpre 1766.tif	Gate of Calais_Unknown_Sayer_1768.tif
Gate of Calais_Radclyffe_London Printing and Publishing_1860s.tif	Gate of Calais_June_Sayer_1768.tif

Hogarth_Battle of Pictures_Feb 1745.tif	Battle of the Pictures_Barlow_Boydell_1791.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Strolling Actresses State 4_Hogarth_Hogarth_March 25, 1738.tif
Hogarth_Battle of Pictures_Feb 1745.tif	A rakes progress Plate 6_Hogarth_Hogarth_June 25 1735.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Battle of the Pictures_Unknown_Simpkin_1880.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Battle of the Pictures_Cook_Stockdale_1806.tif
Battle of the Pictures_Cook_Stockdale_1806.tif	Battle of the Pictures_Unknown_Simpkin_1880.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Rockman_Apologies to Hogarth_Battle of Pictures detail.tif
Hogarth_Battle of Pictures_Feb 1745.tif	A midnight modern conversation State 3_Hogarth_Hogarth_March 1732.tif
A midnight modern conversation State 3_Hogarth_Hogarth_March 1732.tif	Midnight Modern Conversation_Unknown_Jones & Co._1833.tif
A midnight modern conversation State 3_Hogarth_Hogarth_March 1732.tif	Richard Lee Golden Tobacco Roll_Ireland_1794.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Morning State 2_Hogarth_Hogarth_March 25 1738.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Rockman_Apologies to Hogarth_Battle of Pictures detail.tif
Rockman_Apologies to Hogarth_Battle of Pictures detail.tif	Marriage a-la-merde Plate 2_Rockman_2022.tif
Hogarth_Battle of Pictures_Feb 1745.tif	Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif

A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Unknown_Sayer_1768.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Corbould & Dent_Boydell_1793.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Cook_Stockdale_1806.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Cook_Longman_1809.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Worthington_Jones & Co._1833.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	Rake's Progress plate 3_Heath (restored by)_Baldwin and Cradock_1835.tif
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	A Rake's Progress Hole in her Stocking (3)~hi.jpg
A Rake's Progress Hole in her Stocking (3)~hi.jpg	A Rake's Progress Hole in her Stocking (1)~hi.jpg
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	A Rake’s Progress Bottoms Up (3)~hi.jpg
A Rakes Progress Plate 3_Hogarth_Hogarth_24 June 1735.tif	A Rake’s Progress Bottoms Up (4)~hi.jpg

Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Hogarth_Etchmaster_1940s.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Unknown_Sayer_1768.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Unknown_Oliphant Anderson & Ferrier_1883.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Unknown_Simpkin_1880.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Mollison_Jones & Co._1833.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Cook_Longman_1807.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Mollison_London Printing and Publishing_1860s.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Dent_Boydell_1791.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Clerk_Scholey_1810.tif
Morning State 2_Hogarth_Hogarth_March 25 1738.tif	Morning_Heath (restored by)_Baldwin and Cradock_1835.tif

Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Hogarth_Battle of Pictures_Feb 1745.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-merde Plate 2_Rockman_2022.tif
Marriage a-la-merde Plate 2_Rockman_2022.tif	Rockman_Apologies to Hogarth_Marriage a la mode detail.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Unknown_Young_1823.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la Mode plate 2_Cook_Stockdale_1806.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Unknown_Simpkin_1880.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Unknown_Sayer_1768.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Nicholson_London Printing and Publishing_1860s.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Nicholson_Jones & Co._1833.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Nicholson_London Printing and Publishing_1860s.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Nicholson_Jones & Co._1833.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Dent_Boydell_1793.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Heath (restored by)_Baldwin and Cradock_1835.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Clerk_Scholey_1810.tif
Marriage a la mode Plate 2 State 2_Baron_Hogarth_April 1 1745.tif	Marriage a-la-Mode plate 2_Dent_Boydell_1791.tif
Marriage a-la-Mode plate 2_Dent_Boydell_1791.tif	Marriage a-la-Mode plate 2_Dent_Boydell_1793.tif

Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Unknown_Sayer_1768.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Heath (restored by)_Baldwin and Cradock_1835.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Davenport_Jones & Co._1833.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Davenport_London Printing and Publishing_1860s.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Cook_Longman_1807.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Corbould & Dent_Boydell_1793.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Clerk_Scholey_1810.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progress plate 2_Corbould & Dent_Boydell_1791.tif
Harlot's Progress plate 2_Corbould & Dent_Boydell_1791.tif	Harlot's Progress plate 2_Corbould & Dent_Boydell_1793.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Harlot's Progres plate 2_Unknown_Simpkin_1880.tif
Harlots Progress Plate 2 State 1_Hogarth_Apr 1732.tif	Hogarth_Battle of Pictures_Feb 1745.tif

John Wilkes State 1_Hogarth_Hogarth_May 16 1763.tif	John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif
John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif	John Wilkes_Cook_G.G. & J. Robinson_April 1, 1800.tif
John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif	John Wilkes Esq_Cook_Stockdale_1806.tif
John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif	John Wilkes_Cook_Longmam,Hurst, Rees & Orme_July 1, 1807.tif
John Wilkes State 2_Hogarth_Hogarth_May 16 1763.tif	Julian Assange_Bluelou_2010.tif

The march to Finchley State 1_Sullivan_Hogarth_Dec 1750.tif	The march to Finchley State 2_Sullivan_Hogarth_Dec 1750.tif
The march to Finchley State 2_Sullivan_Hogarth_Dec 1750.tif	March of the guards towards Scotland State 4_Sullivan_Hogarth_30 Dec 1750.tif
March of the guards towards Scotland State 4_Sullivan_Hogarth_30 Dec 1750.tif	March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March of the guards towards Scotland_Sullivan_Hogarth_12 June 1761.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Unknown_Sayer_1768.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Dent_Boydell_1793.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	A new book of small figures from Hogarth_Hogarth_Laurie & Whittle_12 May 1794.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Cook_Stockdale_1806.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Nicholson_Brain_1849.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Moore_London Printing and Publishing_1860s.tif
March of the guards towards Scotland State 8_Sullivan_Hogarth_31 Dec 1750.tif	March to Finchley_Nicholson_London Printing and Publishing_1860s.tif

Stage Coach State 2_Hogarth_Hogarth_1747.tif	Stage coach State 3_Hogarth_Hogarth_1747.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	A country inn_Hogarth_between 1747-1800.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Dent_Boydell_1793.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Cook_Stockdale_1806.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Cook & Son_Longman_1808.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Clerk_Scholey_1810.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Engleheart_Jones & Co._1833.tif
Stage coach State 3_Hogarth_Hogarth_1747.tif	Stage Coach_Heath (restored by)_Baldwin and Cradock_1835.tif

Midnight Modern Conversation_Dent_Boydell_1791.tif	Hogarth_Battle of Pictures_Feb 1745.tif
Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation_Cook_Stockdale_1806.tif
Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation_Unknown_Jones & Co._1833.tif
Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation_Heath (restored by)_Baldwin and Cradock_1835.tif
Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation_Phillibrown_London Printing and Publishing_1860s.tif
Midnight Modern Conversation_Dent_Boydell_1791.tif	Midnight Modern Conversation_Unknown_Simpkin_1880.tif

Hogarth_Sarah Malcom_Natl Galleries of Scotland.jpg	Sarah Malcolm State 2_Hogarth_approx 1733.tif
Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm_Barlow_Boydell_1791.tif
Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm_Cook_Stockdale_1806.tif
Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm_Clerk_Scholey_1810.tif
Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm_Heath (restored by)_Baldwin and Cradock_1835.tif
Sarah Malcolm State 2_Hogarth_approx 1733.tif	Sarah Malcolm_Unknown_London Printing and Publishing_1860s.tif

Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in perfection State 1_Bell_Hogarth_Jan 1 1750.tif
Cruelty in perfection State 1_Bell_Hogarth_Jan 1 1750.tif	Cruelty in perfection State 2_Bell_Hogarth_Jan 1 1750.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Les Satyres ... Cruelty in Perfection.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Dent_Boydell_1791.tif
Cruelty in Perfection_Dent_Boydell_1791.tif	Cruelty in Perfection_Dent_Boydell_1793.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Cook_Longman_1807.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Pyet_Scholey_1810.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Heath (restored by)_Baldwin and Cradock_1835.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Romney_London Printing and Publishing_1860s.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Unknown_Simpkin_1880.tif
Cruelty in perfection_Hogarth_Hogarth_Feb 1 1751.tif	Cruelty in Perfection_Unknown_Oliphant Anderson & Ferrier_1883.tif

Tate_The Painter and his Pug_Hogarth_1745.jpg	Gulielmus Hogarth State 4_Hogarth_1749.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_C Spooner after Hogarth_1749.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Bruiser_Dent_Boydell_1791.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Unknown_London Printing and Publishing_1860s.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth+Unknown_Oliphant Anderson & Ferrier_1883.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Unknown_Simpkin_1880.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Cook_Longman_1809.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Unknown_Jones & Co._1833.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Smith_Baldwin and Cradock_1835.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Clerk_Scholey_1810.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Gulielmus Hogarth_Barlow_Boydell_1791.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	The poet and the painter_ca 1763.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Alamy_ Umm al_Quwain stamp of Hogarth.jpg
Gulielmus Hogarth State 4_Hogarth_1749.tif	Martin and the pug_Hogarth CM Oct 2014_hi res.jpg
Gulielmus Hogarth State 4_Hogarth_1749.tif	Copper Plate_Smith_Gulielmus Hogarth.tif
Copper Plate_Smith_Gulielmus Hogarth.tif	Gulielmus Hogarth_Smith after Hogarth_1795.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	Rockman_Apologies to Hogarth.tif
Rockman_Apologies to Hogarth.tif	Apologies to Hogarth detail_Rockman_2022.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	A satire on Hogarth and the Rev C Churchill_1763.tif
Gulielmus Hogarth State 4_Hogarth_1749.tif	The Bruiser State 2_Hogarth_1763.tif
The Bruiser State 2_Hogarth_1763.tif	The Bruiser State 4_Hogarth_1763.tif
The Bruiser State 4_Hogarth_1763.tif	The Bruiser State 5_Hogarth_1763.tif
The Bruiser State 5_Hogarth_1763.tif	The Bruiser State 6_Hogarth_1763.tif
The Bruiser State 6_Hogarth_1763.tif	The Bruiser State 7_Hogarth_1763.tif
The Bruiser State 7_Hogarth_1763.tif	The Bruiser_Bell after Hogarth_1763.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Dent_Boydell_1791.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Unknown_Simpkin_1880.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Unknown_Oliphant Anderson & Ferrier_1883.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Mills_London Printing and Publishing_1860s.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Clerk_Scholey_1810.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Cook_Longman_1807.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Heath (restored by)_Baldwin and Cradock_1835.tif
The Bruiser State 7_Hogarth_1763.tif	Bruiser_Mills_Jones & Co._1833.tif`;
    static readonly imageLayoutHeader = "ID	Start X	Start Y	Layout Random Seed";
    static readonly imageLayouts = `[Lubaina Himid]	0	0	10000
[Gin Lane]	20	40	20001
[Morning]	55	20	30000
[Marriage a la mode Plate 2]	0	0	40000	Pre-linked
[Battle of Pictures]	0	0	50000	Pre-linked
[Harlots Progress Plate 2]	80	10	60000	Orphan
[John Wilkes]	95	10	70000
[March of Finchley]	110	20	80000
[Stage Coach]	10	75	90000
[Gate of Calais]	45	75	100000
[Midnight Modern]	0	0	110000	Pre-linked
[Strolling Actresses]	65	70	120000	Orphan
[Sarah Malcolm]	70	80	130000
[Rakes Progress Plate 6]	85	65	140000	Orphan
[Rakes Progress Plate 3]	100	100	150000	Pre-linked
[Self-portrait Comic Muse]	100	80	160000
[Self-portrait with Pug]	30	120	170000
[Stages of Cruelty]	80	110	180000`;
}