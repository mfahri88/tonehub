$("#createPresetColorGrading").click(function(){
	
	$("#last_preset_generate").show();
	
	function randomHue() {
		return Math.floor(Math.random() * 361);
	}
	
	function randomLum() {
		return Math.floor(Math.random() * 51) - 25;
	}
	
	function randomSat() {
		return Math.floor(Math.random() * 21);
	}
	
	function randomBlend() {
		return Math.floor(Math.random() * 101);
	}
	
	function randomBalance() {
		return Math.floor(Math.random() * 201) - 100;
	}
	
	const randomString = generateRandomString(32);
	const randomNumber = randomFileName();
	var presetname = "ColorGrading "+randomNumber;
	var filename = "ToneHub - ColorGrading "+randomNumber+".xmp";
	
	var syntax = '';
		syntax	+= '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 7.0-c000 1.000000, 0000/00/00-00:00:00        ">\n';
		syntax	+= ' <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n';
		syntax	+= '  <rdf:Description rdf:about=""\n';
		syntax	+= '    xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/"\n';
		syntax	+= '   crs:PresetType="Normal"\n';
		syntax	+= '   crs:Cluster=""\n';
		syntax	+= '   crs:UUID="'+randomString+'"\n';
		syntax	+= '   crs:SupportsAmount2="True"\n';
		syntax	+= '   crs:SupportsAmount="True"\n';
		syntax	+= '   crs:SupportsColor="True"\n';
		syntax	+= '   crs:SupportsMonochrome="True"\n';
		syntax	+= '   crs:SupportsHighDynamicRange="True"\n';
		syntax	+= '   crs:SupportsNormalDynamicRange="True"\n';
		syntax	+= '   crs:SupportsSceneReferred="True"\n';
		syntax	+= '   crs:SupportsOutputReferred="True"\n';
		syntax	+= '   crs:RequiresRGBTables="False"\n';
		syntax	+= '   crs:CameraModelRestriction=""\n';
		syntax	+= '   crs:Copyright="ToneHub by AtharizStudio"\n'
		syntax	+= '   crs:ContactInfo="https://atharizstudio.rf.gd"\n'
		syntax	+= '   crs:Version="14.5"\n';
		
		syntax	+= '   crs:SplitToningShadowHue="'+randomHue()+'"\n';
		syntax	+= '   crs:ColorGradeShadowLum="'+randomLum()+'"\n';
		syntax	+= '   crs:SplitToningShadowSaturation="'+randomSat()+'"\n';
		
		syntax	+= '   crs:ColorGradeMidtoneHue="'+randomHue()+'"\n';
		syntax	+= '   crs:ColorGradeMidtoneLum="'+randomLum()+'"\n';
		syntax	+= '   crs:ColorGradeMidtoneSat="'+randomSat()+'"\n';
		
		syntax	+= '   crs:SplitToningHighlightHue="'+randomHue()+'"\n';
		syntax	+= '   crs:ColorGradeHighlightLum="'+randomLum()+'"\n';
		syntax	+= '   crs:SplitToningHighlightSaturation="'+randomSat()+'"\n';
		
		syntax	+= '   crs:ColorGradeGlobalHue="'+randomHue()+'"\n';
		syntax	+= '   crs:ColorGradeGlobalLum="'+randomLum()+'"\n';
		syntax	+= '   crs:ColorGradeGlobalSat="'+randomSat()+'"\n';
		
		syntax	+= '   crs:SplitToningBalance="'+randomBalance()+'"\n';
		syntax	+= '   crs:ColorGradeBlending="'+randomBlend()+'"\n';

		syntax	+= '   crs:HasSettings="True">\n';
		syntax	+= '   <crs:Name>\n';
		syntax	+= '    <rdf:Alt>\n';
		syntax	+= '     <rdf:li xml:lang="x-default">'+presetname+'</rdf:li>\n';
		syntax	+= '    </rdf:Alt>\n';
		syntax	+= '   </crs:Name>\n';
		syntax	+= '   <crs:ShortName>\n';
		syntax	+= '    <rdf:Alt>\n';
		syntax	+= '     <rdf:li xml:lang="x-default"/>\n';
		syntax	+= '    </rdf:Alt>\n';
		syntax	+= '   </crs:ShortName>\n';
		syntax	+= '   <crs:SortName>\n';
		syntax	+= '    <rdf:Alt>\n';
		syntax	+= '     <rdf:li xml:lang="x-default"/>\n';
		syntax	+= '    </rdf:Alt>\n';
		syntax	+= '   </crs:SortName>\n';
		syntax	+= '   <crs:Group>\n';
		syntax	+= '    <rdf:Alt>\n';
		syntax	+= '     <rdf:li xml:lang="x-default">ToneHub: Color Grading</rdf:li>\n';
		syntax	+= '    </rdf:Alt>\n';
		syntax	+= '   </crs:Group>\n';
		syntax	+= '   <crs:Description>\n';
		syntax	+= '    <rdf:Alt>\n';
		syntax	+= '     <rdf:li xml:lang="x-default"/>\n';
		syntax	+= '    </rdf:Alt>\n';
		syntax	+= '   </crs:Description>\n';
		syntax	+= '  </rdf:Description>\n';
		syntax	+= ' </rdf:RDF>\n';
		syntax	+= '</x:xmpmeta>\n';


	// Membuat blob dengan tipe MIME 'application/octet-stream'
    var blob = new Blob([syntax], { type: 'application/octet-stream' });

    // Membuat URL objek dari blob
    var url = URL.createObjectURL(blob);

    // Membuat elemen tautan untuk mengunduh file
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;

    // Menambahkan elemen tautan ke dokumen
    document.body.appendChild(a);

    // Simulasi klik pada tautan untuk mengunduh file
    a.click();

    // Menghapus elemen tautan dari dokumen
    document.body.removeChild(a);

    // Membersihkan URL objek untuk menghindari kebocoran memori
    URL.revokeObjectURL(url);
	
	console.log("Preset Creator");
	
	$("#last_preset_generate").html( "Last generated preset: <b>" + filename + "</b>");
	
});

