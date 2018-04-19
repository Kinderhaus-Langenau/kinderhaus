<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;
use Grav\Plugin\Kinderhaus\Parsedown;

/**
 * Class KinderhausPlugin
 * @package Grav\Plugin
 */
class KinderhausPlugin extends Plugin
{
  /**
   * @return array
   *
   * The getSubscribedEvents() gives the core a list of events
   *     that the plugin wants to listen to. The key of each
   *     array section is the event that the plugin listens to
   *     and the value (in the form of an array) contains the
   *     callable (or function) as well as the priority. The
   *     higher the number the higher the priority.
   */
  public static function getSubscribedEvents()
  {
    return [
      'onTwigExtensions' => ['onTwigExtensions', 0]
    ];
  }

  public function onTwigExtensions($event) {
    require_once(__DIR__ . '/twig/KinderhausExtension.php');
    $this->grav['twig']->twig->addExtension(new KinderhausExtension());
  }
}
