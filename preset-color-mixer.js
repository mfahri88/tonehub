$("#createPresetColorMixer").click(function(){
	
	$("#last_preset_generate").show();
	
	function randomOtherColor(){
	  return Math.floor(Math.random() * 121) - 60;
	}

	function randomSkinRange() {
	  var protectSkintoneChecked = $("#checkProtectSkintone").prop("checked");
	  var minRange = protectSkintoneChecked ? -10 : -30;
	  var maxRange = protectSkintoneChecked ? 5 : 30;
	  return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
	}
	
	const randomString = generateRandomString(32);
	const randomNumber = randomFileName();
	var presetname = "ColorMixer "+randomNumber;
	var filename = "ToneHub - ColorMixer "+randomNumber+".xmp";

	var syntax	 = '';
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
		syntax	+= '   crs:Copyright="ToneHub by AtharizStudio"\n';
		syntax	+= '   crs:ContactInfo="https://atharizstudio.rf.gd"\n';
		syntax	+= '   crs:Version="14.5"\n'
		
		syntax	+= '   crs:HueAdjustmentRed="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:HueAdjustmentOrange="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:HueAdjustmentYellow="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:HueAdjustmentGreen="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:HueAdjustmentAqua="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:HueAdjustmentBlue="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:HueAdjustmentPurple="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:HueAdjustmentMagenta="'+randomOtherColor()+'"\n';
		
		syntax	+= '   crs:SaturationAdjustmentRed="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentOrange="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentYellow="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentGreen="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentAqua="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentBlue="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentPurple="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:SaturationAdjustmentMagenta="'+randomOtherColor()+'"\n';
		
		syntax	+= '   crs:LuminanceAdjustmentRed="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentOrange="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentYellow="'+randomSkinRange()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentGreen="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentAqua="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentBlue="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentPurple="'+randomOtherColor()+'"\n';
		syntax	+= '   crs:LuminanceAdjustmentMagenta="'+randomOtherColor()+'"\n';
		
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
		syntax	+= '     <rdf:li xml:lang="x-default">ToneHub: Color Mixer</rdf:li>\n';
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
	
	console.log("Preset Creator: Color Mixer - Complete");
	
	$("#last_preset_generate").html( "Last generated preset: <b>" + filename + "</b>");
	
});