---
layout: page
title: IBM PC Disk Library
menu_title: Disks
menu_order: 5
permalink: /disks/pcx86/
redirect_from:
  - /disks/pc/
---

IBM PC Disk Library
-------------------

The [IBM PC Disk Library](/disks/pcx86/library.xml) lists all of our [Disk Manifests](#disk-manifests)
and makes those disks available to the project's collection of [IBM PC Machines](/devices/pcx86/machine/).

For non-DOS diskettes, see [Disk Libraries](/disks/).

Whenever possible, PCjs archives copies of original distribution diskettes.  Exceptions include the application
"Demo Disks" that we've created for our [IBM PC Application Demos](/apps/pcx86/).  PCjs may also include minor changes
to a disk's boot sector, making it easier to mount the disk in modern operating systems.  See the description of the
[PC-DOS 0.90 Boot Sector](/disks/pcx86/dos/ibm/0.90/#pc-dos-090-boot-sector) for an example.
[macOS](http://www.apple.com/macos/) has built-in support for mounting *.IMG* disk images, and Windows can mount
them with the help of third-party software like [OSFMount](http://www.osforensics.com/tools/mount-disk-images.html).

The summary below is not a complete list of everything in the library, just highlights.  For some of the disks,
we have provided more information about the software, and in some cases, machines that automatically run the software.
Eventually, everything in the library will be listed here, with links to pages that describe the software in more detail,
along with live demonstrations.

### Operating Systems

* [CP/M-86](cpm/)
* [DOS](dos/)
* [OS/2](os2/)
* [Unix](unix/)
* [Windows](windows/)

### Applications

* [Ashton-Tate dBase II](apps/other/dbase2/)
* [IBM TopView](apps/ibm/topview/)
* [Lotus 1-2-3](apps/lotus/123/)
* [MicroPro WordStar](apps/other/wordstar/)
* [Microsoft Applications](apps/microsoft/)
* [Software Arts VisiCalc](/apps/pcx86/1981/visicalc/)
* [Sorcim SuperCalc2](apps/other/sc2/)
* [More...](apps/other/)

Also see our collection of selected [IBM PC Application Demos](/apps/pcx86/).

### Games

* [id Software](games/id/)
* [Infocom Games](games/infocom/)
* [Microsoft Games](games/microsoft/)
* [More...](games/other/)

### Shareware

* [PC-SIG Library 8th Edition CD-ROM (April 1990)](shareware/pcsig08/)
* [PC Magazine (Vols. 6-14)](shareware/pcmag/)
* [PC Tech Journal (1985-1989)](shareware/pctj/)
* [More...](shareware/)

### Tools

* [IBM Tools](tools/ibm/)
* [Microsoft Tools](tools/microsoft/)
* [More...](tools/)

### ROMs, Diagnostics, Demos, and More

* [PC ROM BIOS Sources](roms/ibm/)
* [PC Diagnostics and Demos](diags/)
* [VGA "Black Book" Tests](/tests/pcx86/vga/)

### Fixed Disks

* [Assorted Fixed Disk Images](/disks/pcx86/drives/) (eg, [10Mb](/disks/pcx86/drives/10mb/), [20Mb](/disks/pcx86/drives/20mb/), [47Mb](/disks/pcx86/drives/47mb/), [68Mb](/disks/pcx86/drives/68mb/))

---

Disk Manifests
--------------

Typically, all the distribution disks for a single version of a piece of software are placed in a single
folder, along with a **manifest.xml** file containing metadata about the software and a list of the individual
disks.  This is generally referred to as a [Software Manifest](/apps/), but in the context of the Disk Library,
it's simply known as a Disk Manifest.

A Disk Manifest can then be added to a *[Floppy Drive Controller (FDC)](/docs/pcx86/fdc/)* configuration file,
making all its disks available to any machine loading that particular configuration file.

A simple FDC configuration file, such as [samples.xml](samples.xml), *could* contain individual &lt;disk&gt;
entries like:

```xml
<fdc id="fdcNEC">
    <disk path="/disks/pcx86/dos/ibm/1.00/PCDOS100.json">PC-DOS 1.00</disk>
    <disk path="/disks/pcx86/dos/ibm/1.10/PCDOS110.json">PC-DOS 1.10</disk>
    <disk path="/disks/pcx86/dos/ibm/2.00/PCDOS200-DISK1.json">PC-DOS 2.00 (Disk 1)</disk>
    <disk path="/disks/pcx86/dos/ibm/2.00/PCDOS200-DISK2.json">PC-DOS 2.00 (Disk 2)</disk>
    ...
</fdc>
```

However, listing individual diskettes like that is tedious, so support was added for Disk Manifest references:

Instead of listing the PC-DOS 2.00 diskettes individually, they can now be added to an XML configuration file
with a single Disk Manifest reference:

```xml
<manifest ref="/disks/pcx86/dos/ibm/2.00/manifest.xml" disk="*"/>
```

When you want to include only one particular disk from a manifest, set the *disk* value to the *id* of the disk.
Here's how you would include only the *first* disk from PC-DOS 2.00:

```xml
<manifest ref="/disks/pcx86/dos/ibm/2.00/manifest.xml" disk="disk01"/>
```

Here's what the entire Disk Manifest for PC-DOS 2.00 currently looks like:

```xml
<manifest type="software">
    <title>PC-DOS</title>
    <version>2.00</version>
    <type>DOS</type>
    <category>Operating System</category>
    <author>IBM/Microsoft</author>
    <releaseDate/>
    <disk id="disk01" size="184320" chs="40:1:9" img="archive/PCDOS200-DISK1.img" href="/disks/pcx86/dos/ibm/2.00/PCDOS200-DISK1.json" md5="d57ceef82122790d1c0ff7bebc12f90a" md5json="2507c02da6cbafe9a94a35cbdd993be2">
        <name>PC-DOS 2.00 (Disk 1)</name>
    </disk>
    <disk id="disk02" size="184320" chs="40:1:9" img="archive/PCDOS200-DISK2.img" href="/disks/pcx86/dos/ibm/2.00/PCDOS200-DISK2.json" md5="1c7aac53c78446992f8821cf42d04c4a" md5json="b66e296319c1f97990b596b1aa376d39">
        <name>PC-DOS 2.00 (Disk 2)</name>
    </disk>
</manifest>
```
